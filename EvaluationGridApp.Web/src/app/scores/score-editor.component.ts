import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./score-editor.component.html"),
    styles: [require("./score-editor.component.css")],
    selector: "score-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreEditorComponent {}


