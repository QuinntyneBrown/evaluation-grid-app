import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./score-list.component.html"),
    styles: [require("./score-list.component.css")],
    selector: "score-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreListComponent {
    constructor() { }     
}
