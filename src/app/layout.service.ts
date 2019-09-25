import { Injectable } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from './app.actions';
import { LayoutState, State } from './app.reducers';

@Injectable()
export class LayoutService {
  readonly sidenavOpen: Observable<boolean>;

  constructor(private _store: Store<State>) {
    const layoutState = (state: State) => state.layout;
    const sidenavOpen = createSelector(layoutState, (state: LayoutState) => state.sidenavOpen);

    this.sidenavOpen = _store.pipe(select(sidenavOpen));
  }

  openSidenav(): void {
    this._store.dispatch(new actions.OpenSidenavAction());
  }

  closeSidenav(): void {
    this._store.dispatch(new actions.CloseSidenavAction());
  }
}
