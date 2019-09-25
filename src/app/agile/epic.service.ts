import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {ModelActions, ModelService} from '@gngt/core/model';
import {State} from '@gngt/core/reducers';

import * as epicActions from './epic.actions';
import {Epic} from './epic';
import * as fromEpic from './epic.reducers';
import * as fromPackage from './reducers';


@Injectable()
export class EpicService
    extends ModelService<
      Epic,
      fromEpic.State,
      epicActions.EpicActionTypes
    > {
  constructor(store: Store<State>, actions: Actions<ModelActions.ModelBaseAction>) {
    super(
      store,
      actions,
      epicActions.epicActionTypes,
      [fromPackage.packageStatePrefix, fromEpic.epicStatePrefix]
    );
  }
}
