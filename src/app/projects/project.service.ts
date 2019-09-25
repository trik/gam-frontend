import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {ModelActions, ModelService} from '@gngt/core/model';
import {State} from '@gngt/core/reducers';

import * as projectActions from './project.actions';
import {Project} from './project';
import * as fromProject from './project.reducers';
import * as fromPackage from './reducers';


@Injectable()
export class ProjectService
    extends ModelService<
      Project,
      fromProject.State,
      projectActions.ProjectActionTypes
    > {
  constructor(store: Store<State>, actions: Actions<ModelActions.ModelBaseAction>) {
    super(
      store,
      actions,
      projectActions.projectActionTypes,
      [fromPackage.packageStatePrefix, fromProject.projectStatePrefix]
    );
  }
}
