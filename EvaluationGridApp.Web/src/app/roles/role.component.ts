import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./role.component.html"),
    styles: [require("./role.component.scss")],
    selector: "role",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleComponent {
    constructor() { }
}
