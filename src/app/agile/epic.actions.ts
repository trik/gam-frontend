import {ModelActions} from '@gngt/core/model';
// import {type} from '@gngt/core/reducers';
import {Epic} from './epic';

// tslint:disable-next-line
export interface EpicActionTypes extends ModelActions.ModelActionTypes {
}

// tslint:disable-next-line
export const epicActionTypes: EpicActionTypes =
  Object.assign({}, ModelActions.generateModelActionTypes('Epic'), {
  });

export class EpicListAction
    extends ModelActions.ModelListAction {
  type = epicActionTypes.LIST;
}
export class EpicListFailureAction
    extends ModelActions.ModelListFailureAction {
  type = epicActionTypes.LIST_FAILURE;
}
export class EpicListSuccessAction
    extends ModelActions.ModelListSuccessAction<Epic> {
  type = epicActionTypes.LIST_SUCCESS;
}
export class EpicGetAction
    extends ModelActions.ModelGetAction {
  type = epicActionTypes.GET;
}
export class EpicGetFailureAction
    extends ModelActions.ModelGetFailureAction {
  type = epicActionTypes.GET_FAILURE;
}
export class EpicGetSuccessAction
    extends ModelActions.ModelGetSuccessAction<Epic> {
  type = epicActionTypes.GET_SUCCESS;
}
export class EpicCreateAction
    extends ModelActions.ModelCreateAction<Epic> {
  type = epicActionTypes.CREATE;
}
export class EpicCreateFailureAction
    extends ModelActions.ModelCreateFailureAction {
  type = epicActionTypes.CREATE_FAILURE;
}
export class EpicCreateSuccessAction
    extends ModelActions.ModelCreateSuccessAction<Epic> {
  type = epicActionTypes.CREATE_SUCCESS;
}
export class EpicUpdateAction
    extends ModelActions.ModelUpdateAction<Epic> {
  type = epicActionTypes.UPDATE;
}
export class EpicUpdateFailureAction
    extends ModelActions.ModelUpdateFailureAction {
  type = epicActionTypes.UPDATE_FAILURE;
}
export class EpicUpdateSuccessAction
    extends ModelActions.ModelUpdateSuccessAction<Epic> {
  type = epicActionTypes.UPDATE_SUCCESS;
}
export class EpicPatchAction
    extends ModelActions.ModelPatchAction<Epic> {
  type = epicActionTypes.PATCH;
}
export class EpicPatchFailureAction
    extends ModelActions.ModelPatchFailureAction {
  type = epicActionTypes.PATCH_FAILURE;
}
export class EpicPatchSuccessAction
    extends ModelActions.ModelPatchSuccessAction<Epic> {
  type = epicActionTypes.PATCH_SUCCESS;
}
export class EpicDeleteAction
    extends ModelActions.ModelDeleteAction<Epic> {
  type = epicActionTypes.DELETE;
}
export class EpicDeleteFailureAction
    extends ModelActions.ModelDeleteFailureAction {
  type = epicActionTypes.DELETE_FAILURE;
}
export class EpicDeleteSuccessAction
    extends ModelActions.ModelDeleteSuccessAction<Epic> {
  type = epicActionTypes.DELETE_SUCCESS;
}
export class EpicDeleteAllAction
    extends ModelActions.ModelDeleteAllAction<Epic> {
  type = epicActionTypes.DELETE_ALL;
}
export class EpicDeleteAllFailureAction
    extends ModelActions.ModelDeleteAllFailureAction {
  type = epicActionTypes.DELETE_ALL_FAILURE;
}
export class EpicDeleteAllSuccessAction
    extends ModelActions.ModelDeleteAllSuccessAction<Epic> {
  type = epicActionTypes.DELETE_ALL_SUCCESS;
}
export class EpicQueryAction extends ModelActions.ModelQueryAction {
  type = epicActionTypes.QUERY;
}
export class EpicQueryFailureAction
    extends ModelActions.ModelQueryFailureAction {
  type = epicActionTypes.QUERY_FAILURE;
}
export class EpicQuerySuccessAction
    extends ModelActions.ModelQuerySuccessAction<Epic> {
  type = epicActionTypes.QUERY_SUCCESS;
}

export type EpicActions =
  | EpicGetAction
  | EpicGetFailureAction
  | EpicGetSuccessAction
  | EpicListAction
  | EpicListFailureAction
  | EpicListSuccessAction
  | EpicCreateAction
  | EpicCreateFailureAction
  | EpicCreateSuccessAction
  | EpicUpdateAction
  | EpicUpdateFailureAction
  | EpicUpdateSuccessAction
  | EpicPatchAction
  | EpicPatchFailureAction
  | EpicPatchSuccessAction
  | EpicDeleteAction
  | EpicDeleteFailureAction
  | EpicDeleteSuccessAction
  | EpicDeleteAllAction
  | EpicDeleteAllFailureAction
  | EpicDeleteAllSuccessAction
  | EpicQueryAction
  | EpicQueryFailureAction
  | EpicQuerySuccessAction
;
