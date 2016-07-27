import * as actions from "./role.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeRoleReducer = (state, action) => {
    if (action instanceof actions.RemoveRoleAction)
        pluckOut({ items: state.roles, value: action.entity.id });
    return state;
}

export const addRoleReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateRoleAction) {
        addOrUpdate({ items: state.roles, item: action.entity });
    }
    return state;
}

export const allRolesReducer = (state, action) => {
    if (action instanceof actions.AllRolesAction) {
        state.roles = action.entities;
    }
    return state;
}

export const setCurrentRoleReducer = (state, action) => {
    if (action instanceof actions.SetCurrentRoleAction) {
        state.currentRoleId = action.id;
    }
    return state;
}
