import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';

import {ModelEffects} from '@gngt/core/model';

import {UserStory} from './user-story';
import * as actions from './user-story.actions';
import {UserStoryManager} from './user-story.manager';
import {UserStoryService} from './user-story.service';
import {State} from './user-story.reducers';

@Injectable()
export class UserStoryEffects extends ModelEffects<
    UserStory,
    State,
    actions.UserStoryActions,
    actions.UserStoryActionTypes> {

  constructor(
    _actions: Actions,
    _service: UserStoryService,
    _manager: UserStoryManager
  ) {
    super(_actions, _service, _manager, actions.userStoryActionTypes);
  }
}
