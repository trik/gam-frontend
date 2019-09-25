import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '@envs/environment';
import { TranslationsModule } from '@gngt/core/translations';
import { AUTH_OPTIONS, JWT_OPTIONS } from '@gngt/core/auth';
import { AuthModule } from '@gngt/material/auth';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TranslateModule } from '@ngx-translate/core';

import { AgileModule } from './agile';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAuthOptions, provideJwtOptions, providers } from './app.providers';
import { reducers } from './app.reducers';
import { MainComponent } from './main.component';
import { ProjectsModule } from './projects';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    AgileModule.forRoot(),
    AppRoutingModule,
    AuthModule.forRoot({
      jwtOptionsProvider: {provide: JWT_OPTIONS, useFactory: (provideJwtOptions)},
      authOptionsProvider: {provide: AUTH_OPTIONS, useFactory: (provideAuthOptions)},
    }),
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    EffectsModule.forRoot([]),
    ...environment.production ? [] : [StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })],
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    ProjectsModule.forRoot(),
    StoreModule.forRoot(reducers),
    TranslateModule.forRoot(),
    TranslationsModule,
  ],
  providers,
  bootstrap: [AppComponent]
})
export class AppModule { }
