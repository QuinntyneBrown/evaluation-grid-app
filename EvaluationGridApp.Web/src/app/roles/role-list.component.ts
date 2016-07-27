import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./role-list.component.html"),
    styles: [require("./role-list.component.css")],
    selector: "role-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleListComponent {
    constructor() { }     
}
