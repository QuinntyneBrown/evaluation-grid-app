import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./criteria-list.component.html"),
    styles: [require("./criteria-list.component.css")],
    selector: "criteria-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriteriaListComponent {
    constructor() { }     
}
