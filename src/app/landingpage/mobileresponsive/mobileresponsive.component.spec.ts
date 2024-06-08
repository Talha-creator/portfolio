import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileresponsiveComponent } from './mobileresponsive.component';

describe('MobileresponsiveComponent', () => {
  let component: MobileresponsiveComponent;
  let fixture: ComponentFixture<MobileresponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileresponsiveComponent]
    });
    fixture = TestBed.createComponent(MobileresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
