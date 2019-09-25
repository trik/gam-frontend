import {Injectable} from '@angular/core';

import {Actions} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import {ModelActions, ModelService} from '@gngt/core/model';
import {State} from '@gngt/core/reducers';

import * as userStoryActions from './user-story.actions';
import {UserStory} from './user-story';
import * as fromUserStory from './user-story.reducers';
import * as fromPackage from './reducers';


@Injectable()
export class UserStoryService
    extends ModelService<
      UserStory,
      fromUserStory.State,
      userStoryActions.UserStoryActionTypes
    > {
  constructor(store: Store<State>, actions: Actions<ModelActions.ModelBaseAction>) {
    super(
      store,
      actions,
      userStoryActions.userStoryActionTypes,
      [fromPackage.packageStatePrefix, fromUserStory.userStoryStatePrefix]
    );
  }
}
