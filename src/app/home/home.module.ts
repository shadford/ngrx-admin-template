import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

import { TasksComponent } from './components/tasks/tasks.component';
import { HomeDashboardComponent } from './containers/home-dashboard/home-dashboard.component';

export const COMPONENTS = [HomeDashboardComponent, TasksComponent];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeDashboardComponent
      },
    ]),
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class HomeModule {

}
