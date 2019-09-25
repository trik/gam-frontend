import {generateInitialModelState, modelReducer, State as ModelState} from '@gngt/core/model';

import {TaskActions, taskActionTypes} from './task.actions';
import {Task} from './task';


// tslint:disable-next-line
export interface State extends ModelState<Task> {
}

const initialState: State = {...generateInitialModelState<Task>(), ...{
}};

export const taskStatePrefix = 'task';


export function taskReducer(
  state: State = initialState, action: TaskActions
): State {
  return modelReducer<Task>(state, action, taskActionTypes);
}
