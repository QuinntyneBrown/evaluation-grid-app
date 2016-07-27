export class AddOrUpdateRoleAction { constructor(public id, public entity) { } }

export class AllRolesAction { constructor(public id, public entities) { } }

export class RemoveRoleAction { constructor(public id, public entity) { } }

export class RolesFilterAction { constructor(public id, public term) { } }

export class SetCurrentRoleAction { constructor(public entity) { } }

export class AddOrUpdateRoleSuccessAction { constructor(public entity) { } }

export class CurrentRoleRemovedAction { constructor() { } }
