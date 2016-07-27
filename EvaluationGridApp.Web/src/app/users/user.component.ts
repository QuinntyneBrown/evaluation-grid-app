import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./user.component.html"),
    styles: [require("./user.component.scss")],
    selector: "user",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
    constructor() { }
}
