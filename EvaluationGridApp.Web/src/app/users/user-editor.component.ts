import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./user-editor.component.html"),
    styles: [require("./user-editor.component.css")],
    selector: "user-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditorComponent {}


