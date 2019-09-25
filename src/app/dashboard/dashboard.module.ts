import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: DashboardComponent},
      {path: '**', redirectTo: '/'},
    ]),
  ],
})
export class DashboardModule { }
