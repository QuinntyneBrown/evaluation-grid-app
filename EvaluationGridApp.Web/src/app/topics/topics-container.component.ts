import { CanActivate, ChangeDetectionStrategy, Component } from "../core";
import * as actions from "./topic.actions";
import { pluck } from "../core/pluck";
import { Topic } from "./topic.model";

@Component({
    routes: ["/admin/{{ entityNameLowerCase }}s","/admin/{{ entityNameLowerCase }}/edit/:topicId"],
    template: require("./topics-container.component.html"),
    styles: [require("./topics-container.component.css")],
    selector: "topics-container",
    viewProviders: ["$location","$routeParams","topicActionCreator","invokeAsync"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
@CanActivate(["$q", "$route", "invokeAsync", "topicActionCreator", ($q: angular.IQService, $route: angular.route.IRouteService, invokeAsync, topicActionCreator: actions.TopicActionCreator) => {
    var topicId = $route.current.params.topicId;
    var promises = [invokeAsync(topicActionCreator.all)];
    if (topicId) { promises.push(invokeAsync({ action: topicActionCreator.getById, params: { id: topicId } })) };
    return $q.all(promises);
}])
export class TopicsContainerComponent { 
    constructor(private $location: angular.ILocationService, private $routeParams: angular.route.IRouteParamsService, private topicActionCreator: actions.TopicActionCreator, private _invokeAsync) { }
    storeOnChange = state => {        
        this.entities = state.topics;

		if (state.lastTriggeredByAction instanceof actions.SetCurrentTopicAction && !state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}s");

        if (state.lastTriggeredByAction instanceof actions.SetCurrentTopicAction && state.lastTriggeredByAction.entity) 
            this.$location.path("/admin/{{ entityNameLowerCase }}/edit/" + state.lastTriggeredByAction.entity.id);
        
		if (state.lastTriggeredByAction instanceof actions.AddOrUpdateTopicAction)
            this.entity = new Topic();

        if (state.lastTriggeredByAction instanceof actions.RemoveTopicAction && this.entity && this.entity.id) {
            this.entity = pluck({ value: Number(this.$routeParams["topicId"]), items: this.entities }) as Topic;
            if (Object.keys(this.entity).length === 0) { this.$location.path("/admin/{{ entityNameLowerCase }}s"); }
        }
    }

    ngOnInit = () => {
        if (this.$routeParams["topicId"]) {
            this.entity = pluck({ value: Number(this.$routeParams["topicId"]), items: this.entities }) as Topic;
        } else {
            this.entity = new Topic();
        }
    }

    edit = entity => this.topicActionCreator.edit(entity);
    remove = entity => this.topicActionCreator.remove(entity);
    create = entity => this.topicActionCreator.create();
    addOrUpdate = options => {
        this._invokeAsync({
            action: this.topicActionCreator.addOrUpdate,
            params: { data: options.data }
        }).then(() => {
            if (this.$location.path() === "/admin/{{ entityNameLowerCase }}s") {
                this.entity = new Topic();
            } else {
                this.$location.path("/admin/{{ entityNameLowerCase }}s")
            }
        });        
    };
    entity: Topic;
    entities: Array<Topic>;
}
