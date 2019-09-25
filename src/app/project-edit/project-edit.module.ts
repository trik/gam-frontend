import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModule } from '@gngt/material/admin';

import { ProjectEditComponent } from './project-edit.component';

@NgModule({
  declarations: [
    ProjectEditComponent,
  ],
  imports: [
    AdminModule,
    RouterModule.forChild([
      {path: ':id', component: ProjectEditComponent},
      {path: '**', redirectTo: '/'},
    ]),
  ],
})
export class ProjectEditModule { }
