import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, Optional} from '@angular/core';

import {MODEL_OPTIONS, ModelManager, ModelOptions} from '@gngt/core/model';
import {SyncService} from '@gngt/core/sync';

import {UserStory} from './user-story';

import {environment} from '@envs/environment';

@Injectable()
export class UserStoryManager extends ModelManager<UserStory> {
  constructor(
      @Inject(MODEL_OPTIONS) opts: ModelOptions,
      http: HttpClient, @Optional() syncService?: SyncService
  ) {
    super(opts, environment.apiConfig.userStory.base, http, syncService);
  }
}
