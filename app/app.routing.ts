import {DashboardComponent} from './components/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail.component';
import {HeroesComponent} from './components/heroes.component';
import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    component: HeroesComponent,
    path: 'heroes'
  },
  {
    component: DashboardComponent,
    path: 'dashboard'
  },
  {
    component: HeroDetailComponent,
    path: 'detail/:id'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
