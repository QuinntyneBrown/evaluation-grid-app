import { CanActivate, ChangeDetectionStrategy, Component } from "../core";

@Component({
    template: require("./score.component.html"),
    styles: [require("./score.component.scss")],
    selector: "score",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScoreComponent {
    constructor() { }
}
