import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroesResolver implements Resolve<any> {

  constructor(private http: Http) { }

  resolve(){
    return this.http.get('/api/heroes.json').toPromise()
      .then( (res) => {
        const results = res.json().heroes.map((hero) => {
          return new Hero(hero);
        })

        return results;
      },
      (err) => {
        throw err;        
      })
      
  }
}