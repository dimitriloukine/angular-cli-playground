import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],  
  exports: [HeroesComponent],
  declarations: [HeroesComponent]
})
export class HeroesModule { }
