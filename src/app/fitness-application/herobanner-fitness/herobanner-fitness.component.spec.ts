import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerFitnessComponent } from './herobanner-fitness.component';

describe('HerobannerFitnessComponent', () => {
  let component: HerobannerFitnessComponent;
  let fixture: ComponentFixture<HerobannerFitnessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerobannerFitnessComponent]
    });
    fixture = TestBed.createComponent(HerobannerFitnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
