require("../core/core.module");

import { provide, provideAction } from "../core";
import { ScoreEditorComponent } from "./score-editor.component";
import { ScoreListComponent } from "./score-list.component";
import { ScoreComponent } from "./score.component";
import { ScoresContainerComponent } from "./scores-container.component";
import { ScoreActionCreator } from "./score.action-creator";
import { ScoreService } from "./score.service";
import *  as reducers from "./score.reducers";
import *  as actions from "./score.actions";

var app = (<any>angular.module("app.score", [
    "app.core"    
]));

provide(app,ScoreActionCreator);
provide(app,ScoreService);
app.component(ScoreEditorComponent);
app.component(ScoreListComponent);
app.component(ScoreComponent);
app.component(ScoresContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
