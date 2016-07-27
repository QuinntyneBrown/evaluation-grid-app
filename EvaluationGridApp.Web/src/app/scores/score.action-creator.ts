import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";
import { AllScoresAction, RemoveScoreAction, ScoresFilterAction, SetCurrentScoreAction, AddOrUpdateScoreSuccessAction, CurrentScoreRemovedAction } from "../score/score.actions";

@Service({
    serviceName: "scoreActionCreator",
    viewProviders: ["$location", "dispatcher", "scoreService", "guid", "invokeAsync","modalActionCreator"]
})
export class ScoreActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, scoreService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,scoreService,dispatcher,guid,AddOrUpdateScoreAction,AllScoresAction,RemoveScoreAction,SetCurrentScoreAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateScoreSuccessAction(options.entity));

    currentScoreRemoved = () => this.dispatcher.dispatch(new CurrentScoreRemovedAction());

    openAllScoresModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-score-modal></all-score-modal>" });
        });
    }
}



