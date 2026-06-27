import { Routes } from '@angular/router';
import { NewcomComponent } from './newcom/newcom';
import { DashboardComponent } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: NewcomComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];