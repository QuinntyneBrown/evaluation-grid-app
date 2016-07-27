import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./topic.component.html"),
    styles: [require("./topic.component.scss")],
    selector: "topic",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicComponent {
    constructor() { }
}
