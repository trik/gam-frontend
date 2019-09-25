import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {ModelActions, ModelService} from '@gngt/core/model';
import {State} from '@gngt/core/reducers';

import * as taskActions from './task.actions';
import {Task} from './task';
import * as fromTask from './task.reducers';
import * as fromPackage from './reducers';


@Injectable()
export class TaskService
    extends ModelService<
      Task,
      fromTask.State,
      taskActions.TaskActionTypes
    > {
  constructor(store: Store<State>, actions: Actions<ModelActions.ModelBaseAction>) {
    super(
      store,
      actions,
      taskActions.taskActionTypes,
      [fromPackage.packageStatePrefix, fromTask.taskStatePrefix]
    );
  }
}
