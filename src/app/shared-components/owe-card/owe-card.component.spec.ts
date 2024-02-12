import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OweCardComponent } from './owe-card.component';

describe('OweCardComponent', () => {
  let component: OweCardComponent;
  let fixture: ComponentFixture<OweCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OweCardComponent]
    });
    fixture = TestBed.createComponent(OweCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
