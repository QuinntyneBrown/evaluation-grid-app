import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./topic-editor.component.html"),
    styles: [require("./topic-editor.component.css")],
    selector: "topic-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicEditorComponent {}


