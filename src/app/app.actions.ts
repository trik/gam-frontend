import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open sidenav',
  CloseSidenav = '[Layout] Close sidenav',
}

export class OpenSidenavAction implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenavAction implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}
