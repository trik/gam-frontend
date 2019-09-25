import { Action, ActionReducerMap } from '@ngrx/store';

import { LayoutActionTypes } from './app.actions';

export interface LayoutState {
  sidenavOpen: boolean;
}

export const initialLayoutState: LayoutState = {
  sidenavOpen: false
};

export function layoutReducer(state = initialLayoutState, action: Action): LayoutState {
  switch (action.type) {
    case LayoutActionTypes.OpenSidenav:
    return {...state, sidenavOpen: true};
    case LayoutActionTypes.CloseSidenav:
    return {...state, sidenavOpen: false};
    default:
    return state;
  }
}

export interface State {
  layout: LayoutState;
}

export const reducers: ActionReducerMap<State, any> = {
  layout: layoutReducer
};
