import {ModelActions} from '@gngt/core/model';
// import {type} from '@gngt/core/reducers';
import {Project} from './project';

// tslint:disable-next-line
export interface ProjectActionTypes extends ModelActions.ModelActionTypes {
}

// tslint:disable-next-line
export const projectActionTypes: ProjectActionTypes =
  Object.assign({}, ModelActions.generateModelActionTypes('Project'), {
  });

export class ProjectListAction
    extends ModelActions.ModelListAction {
  type = projectActionTypes.LIST;
}
export class ProjectListFailureAction
    extends ModelActions.ModelListFailureAction {
  type = projectActionTypes.LIST_FAILURE;
}
export class ProjectListSuccessAction
    extends ModelActions.ModelListSuccessAction<Project> {
  type = projectActionTypes.LIST_SUCCESS;
}
export class ProjectGetAction
    extends ModelActions.ModelGetAction {
  type = projectActionTypes.GET;
}
export class ProjectGetFailureAction
    extends ModelActions.ModelGetFailureAction {
  type = projectActionTypes.GET_FAILURE;
}
export class ProjectGetSuccessAction
    extends ModelActions.ModelGetSuccessAction<Project> {
  type = projectActionTypes.GET_SUCCESS;
}
export class ProjectCreateAction
    extends ModelActions.ModelCreateAction<Project> {
  type = projectActionTypes.CREATE;
}
export class ProjectCreateFailureAction
    extends ModelActions.ModelCreateFailureAction {
  type = projectActionTypes.CREATE_FAILURE;
}
export class ProjectCreateSuccessAction
    extends ModelActions.ModelCreateSuccessAction<Project> {
  type = projectActionTypes.CREATE_SUCCESS;
}
export class ProjectUpdateAction
    extends ModelActions.ModelUpdateAction<Project> {
  type = projectActionTypes.UPDATE;
}
export class ProjectUpdateFailureAction
    extends ModelActions.ModelUpdateFailureAction {
  type = projectActionTypes.UPDATE_FAILURE;
}
export class ProjectUpdateSuccessAction
    extends ModelActions.ModelUpdateSuccessAction<Project> {
  type = projectActionTypes.UPDATE_SUCCESS;
}
export class ProjectPatchAction
    extends ModelActions.ModelPatchAction<Project> {
  type = projectActionTypes.PATCH;
}
export class ProjectPatchFailureAction
    extends ModelActions.ModelPatchFailureAction {
  type = projectActionTypes.PATCH_FAILURE;
}
export class ProjectPatchSuccessAction
    extends ModelActions.ModelPatchSuccessAction<Project> {
  type = projectActionTypes.PATCH_SUCCESS;
}
export class ProjectDeleteAction
    extends ModelActions.ModelDeleteAction<Project> {
  type = projectActionTypes.DELETE;
}
export class ProjectDeleteFailureAction
    extends ModelActions.ModelDeleteFailureAction {
  type = projectActionTypes.DELETE_FAILURE;
}
export class ProjectDeleteSuccessAction
    extends ModelActions.ModelDeleteSuccessAction<Project> {
  type = projectActionTypes.DELETE_SUCCESS;
}
export class ProjectDeleteAllAction
    extends ModelActions.ModelDeleteAllAction<Project> {
  type = projectActionTypes.DELETE_ALL;
}
export class ProjectDeleteAllFailureAction
    extends ModelActions.ModelDeleteAllFailureAction {
  type = projectActionTypes.DELETE_ALL_FAILURE;
}
export class ProjectDeleteAllSuccessAction
    extends ModelActions.ModelDeleteAllSuccessAction<Project> {
  type = projectActionTypes.DELETE_ALL_SUCCESS;
}
export class ProjectQueryAction extends ModelActions.ModelQueryAction {
  type = projectActionTypes.QUERY;
}
export class ProjectQueryFailureAction
    extends ModelActions.ModelQueryFailureAction {
  type = projectActionTypes.QUERY_FAILURE;
}
export class ProjectQuerySuccessAction
    extends ModelActions.ModelQuerySuccessAction<Project> {
  type = projectActionTypes.QUERY_SUCCESS;
}

export type ProjectActions =
  | ProjectGetAction
  | ProjectGetFailureAction
  | ProjectGetSuccessAction
  | ProjectListAction
  | ProjectListFailureAction
  | ProjectListSuccessAction
  | ProjectCreateAction
  | ProjectCreateFailureAction
  | ProjectCreateSuccessAction
  | ProjectUpdateAction
  | ProjectUpdateFailureAction
  | ProjectUpdateSuccessAction
  | ProjectPatchAction
  | ProjectPatchFailureAction
  | ProjectPatchSuccessAction
  | ProjectDeleteAction
  | ProjectDeleteFailureAction
  | ProjectDeleteSuccessAction
  | ProjectDeleteAllAction
  | ProjectDeleteAllFailureAction
  | ProjectDeleteAllSuccessAction
  | ProjectQueryAction
  | ProjectQueryFailureAction
  | ProjectQuerySuccessAction
;
