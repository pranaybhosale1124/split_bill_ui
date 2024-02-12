import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseShowComponent } from './expense-show.component';

describe('ExpenseShowComponent', () => {
  let component: ExpenseShowComponent;
  let fixture: ComponentFixture<ExpenseShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseShowComponent]
    });
    fixture = TestBed.createComponent(ExpenseShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
