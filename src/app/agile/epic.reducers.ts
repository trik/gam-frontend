import {generateInitialModelState, modelReducer, State as ModelState} from '@gngt/core/model';

import {EpicActions, epicActionTypes} from './epic.actions';
import {Epic} from './epic';


// tslint:disable-next-line
export interface State extends ModelState<Epic> {
}

const initialState: State = {...generateInitialModelState<Epic>(), ...{
}};

export const epicStatePrefix = 'epic';


export function epicReducer(
  state: State = initialState, action: EpicActions
): State {
  return modelReducer<Epic>(state, action, epicActionTypes);
}
