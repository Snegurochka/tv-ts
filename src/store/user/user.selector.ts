import { createSelector } from "reselect";
import { AppStateType } from "../reducers";
import { UserInitStateType } from "./user.reducer";

const selectUserReducer = (state: AppStateType): UserInitStateType => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user) => user.currentUser
);

export const isLoginError = createSelector(
    selectUserReducer,
    (user) => user.error
);