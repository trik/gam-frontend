import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { AuthModule } from '@gngt/material/auth';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: LoginComponent}
    ]),
    TranslateModule,
    AuthModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
