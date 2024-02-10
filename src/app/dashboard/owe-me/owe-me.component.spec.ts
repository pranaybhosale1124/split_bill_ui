import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OweMeComponent } from './owe-me.component';

describe('OweMeComponent', () => {
  let component: OweMeComponent;
  let fixture: ComponentFixture<OweMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OweMeComponent]
    });
    fixture = TestBed.createComponent(OweMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
