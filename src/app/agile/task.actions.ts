import {ModelActions} from '@gngt/core/model';
// import {type} from '@gngt/core/reducers';
import {Task} from './task';

// tslint:disable-next-line
export interface TaskActionTypes extends ModelActions.ModelActionTypes {
}

// tslint:disable-next-line
export const taskActionTypes: TaskActionTypes =
  Object.assign({}, ModelActions.generateModelActionTypes('Task'), {
  });

export class TaskListAction
    extends ModelActions.ModelListAction {
  type = taskActionTypes.LIST;
}
export class TaskListFailureAction
    extends ModelActions.ModelListFailureAction {
  type = taskActionTypes.LIST_FAILURE;
}
export class TaskListSuccessAction
    extends ModelActions.ModelListSuccessAction<Task> {
  type = taskActionTypes.LIST_SUCCESS;
}
export class TaskGetAction
    extends ModelActions.ModelGetAction {
  type = taskActionTypes.GET;
}
export class TaskGetFailureAction
    extends ModelActions.ModelGetFailureAction {
  type = taskActionTypes.GET_FAILURE;
}
export class TaskGetSuccessAction
    extends ModelActions.ModelGetSuccessAction<Task> {
  type = taskActionTypes.GET_SUCCESS;
}
export class TaskCreateAction
    extends ModelActions.ModelCreateAction<Task> {
  type = taskActionTypes.CREATE;
}
export class TaskCreateFailureAction
    extends ModelActions.ModelCreateFailureAction {
  type = taskActionTypes.CREATE_FAILURE;
}
export class TaskCreateSuccessAction
    extends ModelActions.ModelCreateSuccessAction<Task> {
  type = taskActionTypes.CREATE_SUCCESS;
}
export class TaskUpdateAction
    extends ModelActions.ModelUpdateAction<Task> {
  type = taskActionTypes.UPDATE;
}
export class TaskUpdateFailureAction
    extends ModelActions.ModelUpdateFailureAction {
  type = taskActionTypes.UPDATE_FAILURE;
}
export class TaskUpdateSuccessAction
    extends ModelActions.ModelUpdateSuccessAction<Task> {
  type = taskActionTypes.UPDATE_SUCCESS;
}
export class TaskPatchAction
    extends ModelActions.ModelPatchAction<Task> {
  type = taskActionTypes.PATCH;
}
export class TaskPatchFailureAction
    extends ModelActions.ModelPatchFailureAction {
  type = taskActionTypes.PATCH_FAILURE;
}
export class TaskPatchSuccessAction
    extends ModelActions.ModelPatchSuccessAction<Task> {
  type = taskActionTypes.PATCH_SUCCESS;
}
export class TaskDeleteAction
    extends ModelActions.ModelDeleteAction<Task> {
  type = taskActionTypes.DELETE;
}
export class TaskDeleteFailureAction
    extends ModelActions.ModelDeleteFailureAction {
  type = taskActionTypes.DELETE_FAILURE;
}
export class TaskDeleteSuccessAction
    extends ModelActions.ModelDeleteSuccessAction<Task> {
  type = taskActionTypes.DELETE_SUCCESS;
}
export class TaskDeleteAllAction
    extends ModelActions.ModelDeleteAllAction<Task> {
  type = taskActionTypes.DELETE_ALL;
}
export class TaskDeleteAllFailureAction
    extends ModelActions.ModelDeleteAllFailureAction {
  type = taskActionTypes.DELETE_ALL_FAILURE;
}
export class TaskDeleteAllSuccessAction
    extends ModelActions.ModelDeleteAllSuccessAction<Task> {
  type = taskActionTypes.DELETE_ALL_SUCCESS;
}
export class TaskQueryAction extends ModelActions.ModelQueryAction {
  type = taskActionTypes.QUERY;
}
export class TaskQueryFailureAction
    extends ModelActions.ModelQueryFailureAction {
  type = taskActionTypes.QUERY_FAILURE;
}
export class TaskQuerySuccessAction
    extends ModelActions.ModelQuerySuccessAction<Task> {
  type = taskActionTypes.QUERY_SUCCESS;
}

export type TaskActions =
  | TaskGetAction
  | TaskGetFailureAction
  | TaskGetSuccessAction
  | TaskListAction
  | TaskListFailureAction
  | TaskListSuccessAction
  | TaskCreateAction
  | TaskCreateFailureAction
  | TaskCreateSuccessAction
  | TaskUpdateAction
  | TaskUpdateFailureAction
  | TaskUpdateSuccessAction
  | TaskPatchAction
  | TaskPatchFailureAction
  | TaskPatchSuccessAction
  | TaskDeleteAction
  | TaskDeleteFailureAction
  | TaskDeleteSuccessAction
  | TaskDeleteAllAction
  | TaskDeleteAllFailureAction
  | TaskDeleteAllSuccessAction
  | TaskQueryAction
  | TaskQueryFailureAction
  | TaskQuerySuccessAction
;
