import { HttpClient } from '@angular/common/http';
import { Provider } from '@angular/core';
import {environment} from '@envs/environment';
import { AuthOptions, JwtOptions } from '@gngt/core/auth';
import { MODEL_OPTIONS } from '@gngt/core/model';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as URLParse from 'url-parse';

import {LayoutService} from './layout.service';

export function provideJwtOptions(): JwtOptions {
  const parsedUrl = URLParse(environment.apiConfig.baseUrl);
  const domain = parsedUrl.host;
  const loginRoute = `${domain}${environment.apiConfig.login}`;
  const tokenEntry = 'wms-jwt-token';
  const refreshTokenEntry = 'wms-jwt-refreshToken';
  return {
    tokenGetter: () => localStorage.getItem(tokenEntry),
    tokenSetter: (token) => localStorage.setItem(tokenEntry, `${token}`),
    refreshTokenGetter: () => localStorage.getItem(refreshTokenEntry),
    refreshTokenSetter: (refreshToken) => localStorage.setItem(refreshTokenEntry, refreshToken),
    whitelistedDomains: [domain],
    blacklistedRoutes: [loginRoute],
    authScheme: 'jwt '
  };
}

export function provideAuthOptions(): AuthOptions {
  return {
    loginUrl: `${environment.apiConfig.baseUrl}${environment.apiConfig.login}`,
    logoutUrl: `${environment.apiConfig.baseUrl}${environment.apiConfig.logout}`,
    refreshTokenUrl: `${environment.apiConfig.baseUrl}${environment.apiConfig.refreshToken}`,
    meUrl: `${environment.apiConfig.baseUrl}${environment.apiConfig.me}`,
    disableScopes: true,
    tokenKey: 'token',
    refreshTokenKey: 'refresh_token'
  };
}

export function provideTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, '/assets/i18n');
}

export const providers: Provider[] = [
  LayoutService,
  {provide: TranslateLoader, useFactory: (provideTranslateLoader), deps: [HttpClient]},
  {provide: MODEL_OPTIONS, useValue: {baseApiUrl: environment.apiConfig.baseUrl}},
];
