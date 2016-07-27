require("../core/core.module");

import { provide, provideAction } from "../core";
import { TopicEditorComponent } from "./topic-editor.component";
import { TopicListComponent } from "./topic-list.component";
import { TopicComponent } from "./topic.component";
import { TopicsContainerComponent } from "./topics-container.component";
import { TopicActionCreator } from "./topic.action-creator";
import { TopicService } from "./topic.service";
import *  as reducers from "./topic.reducers";
import *  as actions from "./topic.actions";

var app = (<any>angular.module("app.topic", [
    "app.core"    
]));

provide(app,TopicActionCreator);
provide(app,TopicService);
app.component(TopicEditorComponent);
app.component(TopicListComponent);
app.component(TopicComponent);
app.component(TopicsContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
