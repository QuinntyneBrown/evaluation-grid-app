import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./score.actions";
import { pluck } from "../core/pluck";
import { Score } from "./score.model";

@Component({
    routes: ["/admin/{{ entityNameLowerCase }}s","/admin/{{ entityNameLowerCase }}/edit/:scoreId"],
    template: require("./scores-container.component.html"),
    styles: [require("./scores-container.component.css")],
    selector: "scores-container",
    viewProviders: ["$location","$routeParams","scoreActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "scoreActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, scoreActionCreator: actions.ScoreActionCreator) => {
    var scoreId = $route.current.params.scoreId;
    var promises = [invokeAsync(scoreActionCreator.all)];
    if (scoreId) { promises.push(invokeAsync({ action: scoreActionCreator.getById, params: { id: scoreId } })) };
    return $q.all(promises);
}])
export class ScoresContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private scoreActionCreator: actions.ScoreActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.scores;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentScoreAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}s");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentScoreAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateScoreAction)
            this.entity = new Score();

        if (state.lastTriggeredByAction instanceof actions.RemoveScoreAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["scoreId"]), items: this.entities }) as Score;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/{{ entityNameLowerCase }}s"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["scoreId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["scoreId"]), items: this.entities }) as Score;
        } else {
            this.entity = new Score();
        }
    }

    edit = entity => this.scoreActionCreator.edit(entity);
    remove = entity => this.scoreActionCreator.remove(entity);
    create = entity => this.scoreActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.scoreActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/{{ entityNameLowerCase }}s") {
                this.entity = new Score();
            } else {
                this.$location.path("/admin/{{ entityNameLowerCase }}s")
            }
        });        
    };
    entity: Score;
    entities: Array<Score>;
}
