import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./criteria-editor.component.html"),
    styles: [require("./criteria-editor.component.css")],
    selector: "criteria-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CriteriaEditorComponent {}


