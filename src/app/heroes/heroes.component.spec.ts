import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';
import { HeroesService } from './heroes.service';

import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';



describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],      
      imports: [ FormsModule, HttpModule, RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
    
/*  it('should have at least a heroe', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.heroes).toBeDefined();
    expect(app.heroes).toEqual(jasmine.any(Array));
    expect(app.heroes.length).toBeGreaterThanOrEqual(1);
  }));*/

});
