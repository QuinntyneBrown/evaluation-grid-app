import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./criteria.component.html"),
    styles: [require("./criteria.component.scss")],
    selector: "criteria",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriteriaComponent {
    constructor() { }
}
