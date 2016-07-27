import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./user-list.component.html"),
    styles: [require("./user-list.component.css")],
    selector: "user-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
    constructor() { }     
}
