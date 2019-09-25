import {ModuleWithProviders, NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {EpicEffects} from './epic.effects';
import {EpicManager} from './epic.manager';
import {EpicService} from './epic.service';
import {reducers} from './reducers';
import {TaskManager} from './task.manager';
import {TaskService} from './task.service';
import {TaskEffects} from './task.effects';
import {UserStoryManager} from './user-story.manager';
import {UserStoryService} from './user-story.service';
import {UserStoryEffects} from './user-story.effects';

const AGILE_EFFECTS = [
  EpicEffects,
  TaskEffects,
  UserStoryEffects,
];

@NgModule({
  imports: [
    EffectsModule.forFeature(AGILE_EFFECTS),
    StoreModule.forFeature('agile', reducers),
  ],
})
export class AgileModule {
  static forRoot(): ModuleWithProviders<AgileModule> {
    return {
      ngModule: AgileModule,
      providers: [
        EpicEffects,
        EpicManager,
        EpicService,
        TaskEffects,
        TaskManager,
        TaskService,
        UserStoryEffects,
        UserStoryManager,
        UserStoryService,
      ],
    };
  }
}
