import * as actions from "./user.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeUserReducer = (state, action) => {
    if (action instanceof actions.RemoveUserAction)
        pluckOut({ items: state.users, value: action.entity.id });
    return state;
}

export const addUserReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateUserAction) {
        addOrUpdate({ items: state.users, item: action.entity });
    }
    return state;
}

export const allUsersReducer = (state, action) => {
    if (action instanceof actions.AllUsersAction) {
        state.users = action.entities;
    }
    return state;
}

export const setCurrentUserReducer = (state, action) => {
    if (action instanceof actions.SetCurrentUserAction) {
        state.currentUserId = action.id;
    }
    return state;
}
