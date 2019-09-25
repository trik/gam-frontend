import {generateInitialModelState, modelReducer, State as ModelState} from '@gngt/core/model';

import {ProjectActions, projectActionTypes} from './project.actions';
import {Project} from './project';


// tslint:disable-next-line
export interface State extends ModelState<Project> {
}

const initialState: State = {...generateInitialModelState<Project>(), ...{
}};

export const projectStatePrefix = 'project';


export function projectReducer(
  state: State = initialState, action: ProjectActions
): State {
  return modelReducer<Project>(state, action, projectActionTypes);
}
