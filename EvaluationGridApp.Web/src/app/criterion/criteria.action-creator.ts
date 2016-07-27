import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";
import { AllCriteriasAction, RemoveCriteriaAction, CriteriasFilterAction, SetCurrentCriteriaAction, AddOrUpdateCriteriaSuccessAction, CurrentCriteriaRemovedAction } from "../criteria/criteria.actions";

@Service({
    serviceName: "criteriaActionCreator",
    viewProviders: ["$location", "dispatcher", "criteriaService", "guid", "invokeAsync","modalActionCreator"]
})
export class CriteriaActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, criteriaService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,criteriaService,dispatcher,guid,AddOrUpdateCriteriaAction,AllCriteriasAction,RemoveCriteriaAction,SetCurrentCriteriaAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateCriteriaSuccessAction(options.entity));

    currentCriteriaRemoved = () => this.dispatcher.dispatch(new CurrentCriteriaRemovedAction());

    openAllCriteriasModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-criteria-modal></all-criteria-modal>" });
        });
    }
}



