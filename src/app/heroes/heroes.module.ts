import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroesResolver } from './heroes.resolver';

import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],  
  exports: [HeroesComponent],
  declarations: [HeroesComponent],
  providers: [
     HeroesResolver
  ]
})
export class HeroesModule { }
