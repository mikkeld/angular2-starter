import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {TestComponentComponent} from "./test-component/test-component.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StationComponent} from "./station/station.component";


const appRoutes: Routes = [
  {
    path: 'map',
    component: TestComponentComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'dashboard/:id',
    component: StationComponent
  },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
