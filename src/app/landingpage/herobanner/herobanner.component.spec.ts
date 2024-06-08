import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobannerComponent } from './herobanner.component';

describe('HerobannerComponent', () => {
  let component: HerobannerComponent;
  let fixture: ComponentFixture<HerobannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerobannerComponent]
    });
    fixture = TestBed.createComponent(HerobannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
