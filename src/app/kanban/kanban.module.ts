import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { KanbanComponent } from './kanban.component';

@NgModule({
  declarations: [
    KanbanComponent,
  ],
  imports: [
    RouterModule.forChild([
      {path: '', component: KanbanComponent},
      {path: '**', redirectTo: '/'},
    ])
  ]
})
export class KanbanModule { }
