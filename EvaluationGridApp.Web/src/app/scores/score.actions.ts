export class AddOrUpdateScoreAction { constructor(public id, public entity) { } }

export class AllScoresAction { constructor(public id, public entities) { } }

export class RemoveScoreAction { constructor(public id, public entity) { } }

export class ScoresFilterAction { constructor(public id, public term) { } }

export class SetCurrentScoreAction { constructor(public entity) { } }

export class AddOrUpdateScoreSuccessAction { constructor(public entity) { } }

export class CurrentScoreRemovedAction { constructor() { } }
