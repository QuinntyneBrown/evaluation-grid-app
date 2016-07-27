import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./role.actions";
import { pluck } from "../core/pluck";
import { Role } from "./role.model";

@Component({
    routes: ["/admin/{{ entityNameLowerCase }}s","/admin/{{ entityNameLowerCase }}/edit/:roleId"],
    template: require("./roles-container.component.html"),
    styles: [require("./roles-container.component.css")],
    selector: "roles-container",
    viewProviders: ["$location","$routeParams","roleActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "roleActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, roleActionCreator: actions.RoleActionCreator) => {
    var roleId = $route.current.params.roleId;
    var promises = [invokeAsync(roleActionCreator.all)];
    if (roleId) { promises.push(invokeAsync({ action: roleActionCreator.getById, params: { id: roleId } })) };
    return $q.all(promises);
}])
export class RolesContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private roleActionCreator: actions.RoleActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.roles;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentRoleAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}s");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentRoleAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateRoleAction)
            this.entity = new Role();

        if (state.lastTriggeredByAction instanceof actions.RemoveRoleAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["roleId"]), items: this.entities }) as Role;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/{{ entityNameLowerCase }}s"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["roleId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["roleId"]), items: this.entities }) as Role;
        } else {
            this.entity = new Role();
        }
    }

    edit = entity => this.roleActionCreator.edit(entity);
    remove = entity => this.roleActionCreator.remove(entity);
    create = entity => this.roleActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.roleActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/{{ entityNameLowerCase }}s") {
                this.entity = new Role();
            } else {
                this.$location.path("/admin/{{ entityNameLowerCase }}s")
            }
        });        
    };
    entity: Role;
    entities: Array<Role>;
}
