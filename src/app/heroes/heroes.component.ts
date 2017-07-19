import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { Hero } from './hero';


const HEROES = [];

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {

  constructor( private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.heroes = this.route.snapshot.data['heroes'];
  }

  heroes: Hero[] = [];
  selectedHero: Hero = null;
  newHero: Hero = new Hero({id: null, name: null});
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  };
  createHero(newHero): void {
    const hero = new Hero({id: this.findAvailableId(), name: newHero.name});
    this.heroes.push(hero);
    this.newHero = new Hero({id: null, name: null});
  };
  deleteHero(hero: Hero): void {
    let id = hero.id;
    let index = this.heroes.findIndex((hero: Hero) => {
      return hero.id == id;
    });

    if(index > -1){
      this.heroes.splice(index, 1);
    }
  };
  findAvailableId(): number {
    const ids : any = this.heroes.map((hero: Hero) => {
      return hero.id;
    });
    for (let i = 1; i <= ids.length + 1; i++) {
      if(ids.indexOf(i) == -1){
        return i;
      }
    }
  }

}
