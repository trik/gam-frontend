import {HttpClient} from '@angular/common/http';
import {Inject, Injectable, Optional} from '@angular/core';

import {MODEL_OPTIONS, ModelManager, ModelOptions} from '@gngt/core/model';
import {SyncService} from '@gngt/core/sync';

import {Epic} from './epic';

import {environment} from '@envs/environment';

@Injectable()
export class EpicManager extends ModelManager<Epic> {
  constructor(
      @Inject(MODEL_OPTIONS) opts: ModelOptions,
      http: HttpClient, @Optional() syncService?: SyncService
  ) {
    super(opts, environment.apiConfig.epic.base, http, syncService);
  }
}
