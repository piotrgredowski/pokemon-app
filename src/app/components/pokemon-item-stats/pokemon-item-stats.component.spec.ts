import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonItemStatsComponent } from './pokemon-item-stats.component';

describe('PokemonItemStatsComponent', () => {
  let component: PokemonItemStatsComponent;
  let fixture: ComponentFixture<PokemonItemStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonItemStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonItemStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
