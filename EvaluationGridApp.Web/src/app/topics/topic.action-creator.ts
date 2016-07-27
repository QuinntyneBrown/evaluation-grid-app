import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";
import { AllTopicsAction, RemoveTopicAction, TopicsFilterAction, SetCurrentTopicAction, AddOrUpdateTopicSuccessAction, CurrentTopicRemovedAction } from "../topic/topic.actions";

@Service({
    serviceName: "topicActionCreator",
    viewProviders: ["$location", "dispatcher", "topicService", "guid", "invokeAsync","modalActionCreator"]
})
export class TopicActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, topicService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,topicService,dispatcher,guid,AddOrUpdateTopicAction,AllTopicsAction,RemoveTopicAction,SetCurrentTopicAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateTopicSuccessAction(options.entity));

    currentTopicRemoved = () => this.dispatcher.dispatch(new CurrentTopicRemovedAction());

    openAllTopicsModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-topic-modal></all-topic-modal>" });
        });
    }
}



