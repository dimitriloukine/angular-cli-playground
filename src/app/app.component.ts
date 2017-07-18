import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

export class Hero {
  id: number;
  name: string;
  role: string;
  constructor(theItem) {
    this.id = theItem.id;
    this.name = theItem.name;
  }
  greet(): string {
    return "Hi, i'm " + this.name;
  }
  google(): void {
    window.open('http://lmgtfy.com/?q=' + this.name);
  }
}

const HEROES: Hero[] = [
  new Hero({id:1, name: "Doomfist", role: 'offense'}),
  new Hero({id:2, name: "Genji", role: 'offense'}),
  new Hero({id:3, name: "McCree", role: 'offense'}),
  new Hero({id:4, name: "Pharah", role: 'offense'}),
  new Hero({id:5, name: "Reaper", role: 'offense'}),
  new Hero({id:6, name: "Soldier: 76", role: 'offense'}),
  new Hero({id:7, name: "Sombra", role: 'offense'}),
  new Hero({id:8, name: "Tracer", role: 'offense'}),
  new Hero({id:9, name: "Bastion", role: 'defense'}),
  new Hero({id:10, name: "Hanzo", role: 'defense'}),
  new Hero({id:11, name: "Junkrat", role: 'defense'}),
  new Hero({id:12, name: "Mei", role: 'defense'}),
  new Hero({id:13, name: "Torbjörn", role: 'defense'}),
  new Hero({id:14, name: "Widowmaker", role: 'defense'}),
  new Hero({id:15, name: "D.Va", role: 'tank'}),
  new Hero({id:16, name: "Orisa", role: 'tank'}),
  new Hero({id:17, name: "Reinhardt", role: 'tank'}),
  new Hero({id:18, name: "Roadhog", role: 'tank'}),
  new Hero({id:19, name: "Winston", role: 'tank'}),
  new Hero({id:20, name: "Zarya", role: 'tank'}),
  new Hero({id:21, name: "Ana", role: 'support'}),
  new Hero({id:22, name: "Lúcio", role: 'support'}),
  new Hero({id:23, name: "Mercy", role: 'support'}),
  new Hero({id:24, name: "Symmetra", role: 'support'}),
  new Hero({id:25, name: "Zenyatta", role: 'support'}),

];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    heroes = HEROES;
    selectedHero: Hero;
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

