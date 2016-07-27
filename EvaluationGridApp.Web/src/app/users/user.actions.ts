export class AddOrUpdateUserAction { constructor(public id, public entity) { } }

export class AllUsersAction { constructor(public id, public entities) { } }

export class RemoveUserAction { constructor(public id, public entity) { } }

export class UsersFilterAction { constructor(public id, public term) { } }

export class SetCurrentUserAction { constructor(public entity) { } }

export class AddOrUpdateUserSuccessAction { constructor(public entity) { } }

export class CurrentUserRemovedAction { constructor() { } }
