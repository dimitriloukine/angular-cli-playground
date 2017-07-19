import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

export enum Role {
    Offense = 1,
    Defense = 2 ,
    Tank = 3,
    Support = 4
}

export class Hero {
  id: number;
  name: string;
  role_id: string;
  role: object;
  constructor(theItem) {
    this.id = theItem.id;
    this.name = theItem.name;
    this.role_id = theItem.role_id;
    this.role = {
      id: theItem.role_id,
      name: Role[theItem.role_id]
    };
  }
  greet(): string {
    return "Hi, i'm " + this.name;
  }
}

const HEROES: Hero[] = [
  new Hero({id:1, name: "Doomfist", role_id: 1}),
  new Hero({id:2, name: "Genji", role_id: 1}),
  new Hero({id:3, name: "McCree", role_id: 1}),
  new Hero({id:4, name: "Pharah", role_id: 1}),
  new Hero({id:5, name: "Reaper", role_id: 1}),
  new Hero({id:6, name: "Soldier: 76", role_id: 1}),
  new Hero({id:7, name: "Sombra", role_id: 1}),
  new Hero({id:8, name: "Tracer", role_id: 1}),
  new Hero({id:9, name: "Bastion", role_id: 2}),
  new Hero({id:10, name: "Hanzo", role_id: 2}),
  new Hero({id:11, name: "Junkrat", role_id: 2}),
  new Hero({id:12, name: "Mei", role_id: 2}),
  new Hero({id:13, name: "Torbjörn", role_id: 2}),
  new Hero({id:14, name: "Widowmaker", role_id: 2}),
  new Hero({id:15, name: "D.Va", role_id: 3}),
  new Hero({id:16, name: "Orisa", role_id: 3}),
  new Hero({id:17, name: "Reinhardt", role_id: 3}),
  new Hero({id:18, name: "Roadhog", role_id: 3}),
  new Hero({id:19, name: "Winston", role_id: 3}),
  new Hero({id:20, name: "Zarya", role_id: 3}),
  new Hero({id:21, name: "Ana", role_id: 4}),
  new Hero({id:22, name: "Lúcio", role_id: 4}),
  new Hero({id:23, name: "Mercy", role_id: 4}),
  new Hero({id:24, name: "Symmetra", role_id: 4}),
  new Hero({id:25, name: "Zenyatta", role_id: 4}),
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
}

