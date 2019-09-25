import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { Observable, of as obsOf } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LayoutService } from './layout.service';
import { Project, ProjectService } from './projects';

@Component({
  selector: 'gam-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MainComponent {
  readonly title = 'wms-app';
  readonly sidenavOpen: Observable<boolean>;
  readonly projects: Observable<Project[]>;

  constructor(
    private _layoutService: LayoutService,
    projectService: ProjectService,
  ) {
    this.sidenavOpen = _layoutService.sidenavOpen;
    this.projects = projectService.list({
      fields: ['id', 'name'],
      sort: {name: 'asc'},
      limit: -1,
    }).pipe(
      map(r => r.results),
      catchError(() => obsOf([]))
    );
  }

  toggleSidenav(isOpen: boolean): void {
    if (isOpen) {
      this._layoutService.closeSidenav();
    } else {
      this._layoutService.openSidenav();
    }
  }
}
