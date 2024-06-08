import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessApplicationComponent } from './fitness-application.component';

describe('FitnessApplicationComponent', () => {
  let component: FitnessApplicationComponent;
  let fixture: ComponentFixture<FitnessApplicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FitnessApplicationComponent]
    });
    fixture = TestBed.createComponent(FitnessApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
