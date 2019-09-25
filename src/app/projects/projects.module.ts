import {ModuleWithProviders, NgModule} from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {ProjectEffects} from './project.effects';
import {ProjectManager} from './project.manager';
import {ProjectService} from './project.service';
import {reducers} from './reducers';

const PROJECTS_EFFECTS = [
  ProjectEffects,
];

@NgModule({
  imports: [
    StoreModule.forFeature('projects', reducers),
    EffectsModule.forFeature(PROJECTS_EFFECTS)
  ],
})
export class ProjectsModule {
  static forRoot(): ModuleWithProviders<ProjectsModule> {
    return {
      ngModule: ProjectsModule,
      providers: [
        ProjectEffects,
        ProjectManager,
        ProjectService,
      ],
    };
  }
}
