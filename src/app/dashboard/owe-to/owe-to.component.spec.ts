import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OweToComponent } from './owe-to.component';

describe('OweToComponent', () => {
  let component: OweToComponent;
  let fixture: ComponentFixture<OweToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OweToComponent]
    });
    fixture = TestBed.createComponent(OweToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
