import {ActionReducerMap} from '@ngrx/store';

import * as fromRoot from '@gngt/core/reducers';
import * as fromEpic from './epic.reducers';
import * as fromUserStory from './user-story.reducers';
import * as fromTask from './task.reducers';

export const packageStatePrefix = 'agile';

export interface AgileState {
  epic: fromEpic.State;
  userStory: fromUserStory.State;
  task: fromTask.State;
}

export interface State extends fromRoot.State {
  agile: AgileState;
}

export const reducers: ActionReducerMap<AgileState, any> = {
  epic: fromEpic.epicReducer,
  userStory: fromUserStory.userStoryReducer,
  task: fromTask.taskReducer
};
