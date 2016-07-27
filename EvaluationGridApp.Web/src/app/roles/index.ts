require("../core/core.module");

import { provide, provideAction } from "../core";
import { RoleEditorComponent } from "./role-editor.component";
import { RoleListComponent } from "./role-list.component";
import { RoleComponent } from "./role.component";
import { RolesContainerComponent } from "./roles-container.component";
import { RoleActionCreator } from "./role.action-creator";
import { RoleService } from "./role.service";
import *  as reducers from "./role.reducers";
import *  as actions from "./role.actions";

var app = (<any>angular.module("app.role", [
    "app.core"    
]));

provide(app,RoleActionCreator);
provide(app,RoleService);
app.component(RoleEditorComponent);
app.component(RoleListComponent);
app.component(RoleComponent);
app.component(RolesContainerComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);

for (var action in actions) { provideAction(app, actions[action]); }
