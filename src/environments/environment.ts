// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiConfig: {
    baseUrl: 'http://localhost:8000/',
    i18nPath: 'assets/i18n',
    login: 'auth/login',
    logout: 'auth/logout',
    refreshToken: 'auth/refresh_token',
    me: 'users/me',
    epic: {
      base: 'epics',
    },
    project: {
      base: 'projects',
    },
    role: {
      base: 'roles',
    },
    task: {
      base: 'tasks',
    },
    user: {
      base: 'users',
    },
    userStory: {
      base: 'user_stories',
    },
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
