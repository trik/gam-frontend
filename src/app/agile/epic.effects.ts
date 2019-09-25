import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';

import {ModelEffects} from '@gngt/core/model';

import {Epic} from './epic';
import * as actions from './epic.actions';
import {EpicManager} from './epic.manager';
import {EpicService} from './epic.service';
import {State} from './epic.reducers';

@Injectable()
export class EpicEffects extends ModelEffects<
    Epic,
    State,
    actions.EpicActions,
    actions.EpicActionTypes> {

  constructor(
    _actions: Actions,
    _service: EpicService,
    _manager: EpicManager
  ) {
    super(_actions, _service, _manager, actions.epicActionTypes);
  }
}
