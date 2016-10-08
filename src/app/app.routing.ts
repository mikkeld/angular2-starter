import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import {TestComponentComponent} from "./test-component/test-component.component";

const appRoutes: Routes = [
  {
    path: 'test',
    component: TestComponentComponent
  },
  {
    path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
