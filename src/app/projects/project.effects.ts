import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';

import {ModelEffects} from '@gngt/core/model';

import {Project} from './project';
import * as actions from './project.actions';
import {ProjectManager} from './project.manager';
import {ProjectService} from './project.service';
import {State} from './project.reducers';

@Injectable()
export class ProjectEffects extends ModelEffects<
    Project,
    State,
    actions.ProjectActions,
    actions.ProjectActionTypes> {

  constructor(
    _actions: Actions,
    _service: ProjectService,
    _manager: ProjectManager
  ) {
    super(_actions, _service, _manager, actions.projectActionTypes);
  }
}
