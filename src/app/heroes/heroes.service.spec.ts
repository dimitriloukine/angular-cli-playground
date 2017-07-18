import { TestBed, inject } from '@angular/core/testing';

import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesService]
    });
  });

  it('should be created', inject([HeroesService], (service: HeroesService) => {
    expect(service).toBeTruthy();
  }));

  
  it('should have at least a heroe', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heroes).toBeDefined();
    expect(app.heroes).toEqual(jasmine.any(Array));
    expect(app.heroes.length).toBeGreaterThanOrEqual(1);
  }));

});
