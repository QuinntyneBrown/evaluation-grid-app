import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./topic-list.component.html"),
    styles: [require("./topic-list.component.css")],
    selector: "topic-list",
    inputs: ['entities','edit','remove'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicListComponent {
    constructor() { }     
}
