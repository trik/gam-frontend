import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';

import {ModelEffects} from '@gngt/core/model';

import {Task} from './task';
import * as actions from './task.actions';
import {TaskManager} from './task.manager';
import {TaskService} from './task.service';
import {State} from './task.reducers';

@Injectable()
export class TaskEffects extends ModelEffects<
    Task,
    State,
    actions.TaskActions,
    actions.TaskActionTypes> {

  constructor(
    _actions: Actions,
    _service: TaskService,
    _manager: TaskManager
  ) {
    super(_actions, _service, _manager, actions.taskActionTypes);
  }
}
