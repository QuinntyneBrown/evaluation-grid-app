import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./role-editor.component.html"),
    styles: [require("./role-editor.component.css")],
    selector: "role-editor",
    inputs: ['entity','addOrUpdate','remove','create'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoleEditorComponent {}


