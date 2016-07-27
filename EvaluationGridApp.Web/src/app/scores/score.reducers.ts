import * as actions from "./score.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeScoreReducer = (state, action) => {
    if (action instanceof actions.RemoveScoreAction)
        pluckOut({ items: state.scores, value: action.entity.id });
    return state;
}

export const addScoreReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateScoreAction) {
        addOrUpdate({ items: state.scores, item: action.entity });
    }
    return state;
}

export const allScoresReducer = (state, action) => {
    if (action instanceof actions.AllScoresAction) {
        state.scores = action.entities;
    }
    return state;
}

export const setCurrentScoreReducer = (state, action) => {
    if (action instanceof actions.SetCurrentScoreAction) {
        state.currentScoreId = action.id;
    }
    return state;
}
