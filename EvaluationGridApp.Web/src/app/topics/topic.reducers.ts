import * as actions from "./topic.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeTopicReducer = (state, action) => {
    if (action instanceof actions.RemoveTopicAction)
        pluckOut({ items: state.topics, value: action.entity.id });
    return state;
}

export const addTopicReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateTopicAction) {
        addOrUpdate({ items: state.topics, item: action.entity });
    }
    return state;
}

export const allTopicsReducer = (state, action) => {
    if (action instanceof actions.AllTopicsAction) {
        state.topics = action.entities;
    }
    return state;
}

export const setCurrentTopicReducer = (state, action) => {
    if (action instanceof actions.SetCurrentTopicAction) {
        state.currentTopicId = action.id;
    }
    return state;
}
