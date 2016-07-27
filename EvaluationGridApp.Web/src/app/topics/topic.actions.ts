export class AddOrUpdateTopicAction { constructor(public id, public entity) { } }

export class AllTopicsAction { constructor(public id, public entities) { } }

export class RemoveTopicAction { constructor(public id, public entity) { } }

export class TopicsFilterAction { constructor(public id, public term) { } }

export class SetCurrentTopicAction { constructor(public entity) { } }

export class AddOrUpdateTopicSuccessAction { constructor(public entity) { } }

export class CurrentTopicRemovedAction { constructor() { } }
