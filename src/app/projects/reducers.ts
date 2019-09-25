import {ActionReducerMap} from '@ngrx/store';

import * as fromRoot from '@gngt/core/reducers';
import * as fromProject from './project.reducers';

export const packageStatePrefix = 'projects';

export interface ProjectsState {
  project: fromProject.State;
}

export interface State extends fromRoot.State {
  projects: ProjectsState;
}

export const reducers: ActionReducerMap<ProjectsState, any> = {
  project: fromProject.projectReducer
};
