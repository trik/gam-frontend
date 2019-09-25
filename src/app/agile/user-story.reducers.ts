import {generateInitialModelState, modelReducer, State as ModelState} from '@gngt/core/model';

import {UserStoryActions, userStoryActionTypes} from './user-story.actions';
import {UserStory} from './user-story';


// tslint:disable-next-line
export interface State extends ModelState<UserStory> {
}

const initialState: State = {...generateInitialModelState<UserStory>(), ...{
}};

export const userStoryStatePrefix = 'userStory';


export function userStoryReducer(
  state: State = initialState, action: UserStoryActions
): State {
  return modelReducer<UserStory>(state, action, userStoryActionTypes);
}
