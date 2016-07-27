import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";
import { AllUsersAction, RemoveUserAction, UsersFilterAction, SetCurrentUserAction, AddOrUpdateUserSuccessAction, CurrentUserRemovedAction } from "../user/user.actions";

@Service({
    serviceName: "userActionCreator",
    viewProviders: ["$location", "dispatcher", "userService", "guid", "invokeAsync","modalActionCreator"]
})
export class UserActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, userService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,userService,dispatcher,guid,AddOrUpdateUserAction,AllUsersAction,RemoveUserAction,SetCurrentUserAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateUserSuccessAction(options.entity));

    currentUserRemoved = () => this.dispatcher.dispatch(new CurrentUserRemovedAction());

    openAllUsersModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-user-modal></all-user-modal>" });
        });
    }
}



