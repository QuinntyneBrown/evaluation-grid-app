export class AddOrUpdateCriteriaAction { constructor(public id, public entity) { } }

export class AllCriteriasAction { constructor(public id, public entities) { } }

export class RemoveCriteriaAction { constructor(public id, public entity) { } }

export class CriteriasFilterAction { constructor(public id, public term) { } }

export class SetCurrentCriteriaAction { constructor(public entity) { } }

export class AddOrUpdateCriteriaSuccessAction { constructor(public entity) { } }

export class CurrentCriteriaRemovedAction { constructor() { } }
