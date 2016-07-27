import * as actions from "./criteria.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeCriteriaReducer = (state, action) => {
    if (action instanceof actions.RemoveCriteriaAction)
        pluckOut({ items: state.criterias, value: action.entity.id });
    return state;
}

export const addCriteriaReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateCriteriaAction) {
        addOrUpdate({ items: state.criterias, item: action.entity });
    }
    return state;
}

export const allCriteriasReducer = (state, action) => {
    if (action instanceof actions.AllCriteriasAction) {
        state.criterias = action.entities;
    }
    return state;
}

export const setCurrentCriteriaReducer = (state, action) => {
    if (action instanceof actions.SetCurrentCriteriaAction) {
        state.currentCriteriaId = action.id;
    }
    return state;
}
