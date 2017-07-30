import { ActionReducer, Action } from "@ngrx/store";
import { AppState, INITIAL_APP_STATE } from '../state';
import { AppActions } from "../actions/appActions";

export function AppReducer(state: AppState = INITIAL_APP_STATE, action: Action) {
    // clones object for modification and return
    const newState: AppState = Object.assign({}, state);
    switch (action.type) {
        case AppActions.SET_LOCATION:
            newState.location = action.payload;
            return newState;
        default:
            return state;
    }
};