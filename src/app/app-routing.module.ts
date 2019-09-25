import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@gngt/core/auth';

import { MainComponent } from './main.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: '', canActivate: [AuthGuard], component: MainComponent, children: [
    {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
    {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path: 'kanban', loadChildren: () => import('./kanban/kanban.module').then(m => m.KanbanModule)},
    {path: 'project', loadChildren: () => import('./project-edit/project-edit.module').then(m => m.ProjectEditModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
