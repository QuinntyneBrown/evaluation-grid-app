require("../core/core.module");

import { provide, provideAction } from "../core";
import { CriteriaEditorComponent } from "./criteria-editor.component";
import { CriteriaListComponent } from "./criteria-list.component";
import { CriteriaComponent } from "./criteria.component";
import { CriteriasContainerComponent } from "./criterias-container.component";
import { CriteriaActionCreator } from "./criteria.action-creator";
import { CriteriaService } from "./criteria.service";
import *  as reducers from "./criteria.reducers";
import *  as actions from "./criteria.actions";

var app = (<any>angular.module("app.criteria", [
    "app.core"    
]));

provide(app,CriteriaActionCreator);
provide(app,CriteriaService);
app.component(CriteriaEditorComponent);
app.component(CriteriaListComponent);
app.component(CriteriaComponent);
app.component(CriteriasContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
