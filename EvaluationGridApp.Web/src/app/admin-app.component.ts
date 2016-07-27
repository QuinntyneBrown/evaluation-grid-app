import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./admin-app.component.html"),
    styles: [require("./admin-app.component.scss")],
    selector: "admin-app",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminAppComponent {
    constructor() { }
}
