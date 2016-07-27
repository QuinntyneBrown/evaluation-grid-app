import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./criteria.actions";
import { pluck } from "../core/pluck";
import { Criteria } from "./criteria.model";

@Component({
    routes: ["/admin/{{ entityNameLowerCase }}s","/admin/{{ entityNameLowerCase }}/edit/:criteriaId"],
    template: require("./criterias-container.component.html"),
    styles: [require("./criterias-container.component.css")],
    selector: "criterias-container",
    viewProviders: ["$location","$routeParams","criteriaActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "criteriaActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, criteriaActionCreator: actions.CriteriaActionCreator) => {
    var criteriaId = $route.current.params.criteriaId;
    var promises = [invokeAsync(criteriaActionCreator.all)];
    if (criteriaId) { promises.push(invokeAsync({ action: criteriaActionCreator.getById, params: { id: criteriaId } })) };
    return $q.all(promises);
}])
export class CriteriasContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private criteriaActionCreator: actions.CriteriaActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.criterias;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentCriteriaAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}s");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentCriteriaAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateCriteriaAction)
            this.entity = new Criteria();

        if (state.lastTriggeredByAction instanceof actions.RemoveCriteriaAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["criteriaId"]), items: this.entities }) as Criteria;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/{{ entityNameLowerCase }}s"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["criteriaId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["criteriaId"]), items: this.entities }) as Criteria;
        } else {
            this.entity = new Criteria();
        }
    }

    edit = entity => this.criteriaActionCreator.edit(entity);
    remove = entity => this.criteriaActionCreator.remove(entity);
    create = entity => this.criteriaActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.criteriaActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/{{ entityNameLowerCase }}s") {
                this.entity = new Criteria();
            } else {
                this.$location.path("/admin/{{ entityNameLowerCase }}s")
            }
        });        
    };
    entity: Criteria;
    entities: Array<Criteria>;
}
