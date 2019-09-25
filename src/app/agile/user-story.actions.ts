import {ModelActions} from '@gngt/core/model';
// import {type} from '@gngt/core/reducers';
import {UserStory} from './user-story';

// tslint:disable-next-line
export interface UserStoryActionTypes extends ModelActions.ModelActionTypes {
}

// tslint:disable-next-line
export const userStoryActionTypes: UserStoryActionTypes =
  Object.assign({}, ModelActions.generateModelActionTypes('UserStory'), {
  });

export class UserStoryListAction
    extends ModelActions.ModelListAction {
  type = userStoryActionTypes.LIST;
}
export class UserStoryListFailureAction
    extends ModelActions.ModelListFailureAction {
  type = userStoryActionTypes.LIST_FAILURE;
}
export class UserStoryListSuccessAction
    extends ModelActions.ModelListSuccessAction<UserStory> {
  type = userStoryActionTypes.LIST_SUCCESS;
}
export class UserStoryGetAction
    extends ModelActions.ModelGetAction {
  type = userStoryActionTypes.GET;
}
export class UserStoryGetFailureAction
    extends ModelActions.ModelGetFailureAction {
  type = userStoryActionTypes.GET_FAILURE;
}
export class UserStoryGetSuccessAction
    extends ModelActions.ModelGetSuccessAction<UserStory> {
  type = userStoryActionTypes.GET_SUCCESS;
}
export class UserStoryCreateAction
    extends ModelActions.ModelCreateAction<UserStory> {
  type = userStoryActionTypes.CREATE;
}
export class UserStoryCreateFailureAction
    extends ModelActions.ModelCreateFailureAction {
  type = userStoryActionTypes.CREATE_FAILURE;
}
export class UserStoryCreateSuccessAction
    extends ModelActions.ModelCreateSuccessAction<UserStory> {
  type = userStoryActionTypes.CREATE_SUCCESS;
}
export class UserStoryUpdateAction
    extends ModelActions.ModelUpdateAction<UserStory> {
  type = userStoryActionTypes.UPDATE;
}
export class UserStoryUpdateFailureAction
    extends ModelActions.ModelUpdateFailureAction {
  type = userStoryActionTypes.UPDATE_FAILURE;
}
export class UserStoryUpdateSuccessAction
    extends ModelActions.ModelUpdateSuccessAction<UserStory> {
  type = userStoryActionTypes.UPDATE_SUCCESS;
}
export class UserStoryPatchAction
    extends ModelActions.ModelPatchAction<UserStory> {
  type = userStoryActionTypes.PATCH;
}
export class UserStoryPatchFailureAction
    extends ModelActions.ModelPatchFailureAction {
  type = userStoryActionTypes.PATCH_FAILURE;
}
export class UserStoryPatchSuccessAction
    extends ModelActions.ModelPatchSuccessAction<UserStory> {
  type = userStoryActionTypes.PATCH_SUCCESS;
}
export class UserStoryDeleteAction
    extends ModelActions.ModelDeleteAction<UserStory> {
  type = userStoryActionTypes.DELETE;
}
export class UserStoryDeleteFailureAction
    extends ModelActions.ModelDeleteFailureAction {
  type = userStoryActionTypes.DELETE_FAILURE;
}
export class UserStoryDeleteSuccessAction
    extends ModelActions.ModelDeleteSuccessAction<UserStory> {
  type = userStoryActionTypes.DELETE_SUCCESS;
}
export class UserStoryDeleteAllAction
    extends ModelActions.ModelDeleteAllAction<UserStory> {
  type = userStoryActionTypes.DELETE_ALL;
}
export class UserStoryDeleteAllFailureAction
    extends ModelActions.ModelDeleteAllFailureAction {
  type = userStoryActionTypes.DELETE_ALL_FAILURE;
}
export class UserStoryDeleteAllSuccessAction
    extends ModelActions.ModelDeleteAllSuccessAction<UserStory> {
  type = userStoryActionTypes.DELETE_ALL_SUCCESS;
}
export class UserStoryQueryAction extends ModelActions.ModelQueryAction {
  type = userStoryActionTypes.QUERY;
}
export class UserStoryQueryFailureAction
    extends ModelActions.ModelQueryFailureAction {
  type = userStoryActionTypes.QUERY_FAILURE;
}
export class UserStoryQuerySuccessAction
    extends ModelActions.ModelQuerySuccessAction<UserStory> {
  type = userStoryActionTypes.QUERY_SUCCESS;
}

export type UserStoryActions =
  | UserStoryGetAction
  | UserStoryGetFailureAction
  | UserStoryGetSuccessAction
  | UserStoryListAction
  | UserStoryListFailureAction
  | UserStoryListSuccessAction
  | UserStoryCreateAction
  | UserStoryCreateFailureAction
  | UserStoryCreateSuccessAction
  | UserStoryUpdateAction
  | UserStoryUpdateFailureAction
  | UserStoryUpdateSuccessAction
  | UserStoryPatchAction
  | UserStoryPatchFailureAction
  | UserStoryPatchSuccessAction
  | UserStoryDeleteAction
  | UserStoryDeleteFailureAction
  | UserStoryDeleteSuccessAction
  | UserStoryDeleteAllAction
  | UserStoryDeleteAllFailureAction
  | UserStoryDeleteAllSuccessAction
  | UserStoryQueryAction
  | UserStoryQueryFailureAction
  | UserStoryQuerySuccessAction
;
