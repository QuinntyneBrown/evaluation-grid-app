import { IDispatcher, BaseActionCreator, Service } from "../core";
import { ModalActionCreator } from "../modal/modal.actions";
import { AllRolesAction, RemoveRoleAction, RolesFilterAction, SetCurrentRoleAction, AddOrUpdateRoleSuccessAction, CurrentRoleRemovedAction } from "../role/role.actions";

@Service({
    serviceName: "roleActionCreator",
    viewProviders: ["$location", "dispatcher", "roleService", "guid", "invokeAsync","modalActionCreator"]
})
export class RoleActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, roleService, guid, private invokeAsync, private modalActionCreator: ModalActionCreator) {
        super($location,roleService,dispatcher,guid,AddOrUpdateRoleAction,AllRolesAction,RemoveRoleAction,SetCurrentRoleAction)
    }    

	addOrUpdateSuccess = options => this.dispatcher.dispatch(new AddOrUpdateRoleSuccessAction(options.entity));

    currentRoleRemoved = () => this.dispatcher.dispatch(new CurrentRoleRemovedAction());

    openAllRolesModal = () => {
        this.invokeAsync(this.all).then(results => {
            this.modalActionCreator.open({ html: "<all-role-modal></all-role-modal>" });
        });
    }
}



