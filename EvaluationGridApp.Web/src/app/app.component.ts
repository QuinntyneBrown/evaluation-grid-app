import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor() { }
}
