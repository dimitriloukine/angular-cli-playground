import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';

import { HeroesResolver } from './heroes/heroes.resolver';

export const router: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { 
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'heroes',
    component: HeroesComponent,
    resolve: {
      heroes: HeroesResolver
    }
  },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);