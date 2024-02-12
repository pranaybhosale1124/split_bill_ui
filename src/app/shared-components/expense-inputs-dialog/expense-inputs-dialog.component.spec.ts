import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseInputsDialogComponent } from './expense-inputs-dialog.component';

describe('ExpenseInputsDialogComponent', () => {
  let component: ExpenseInputsDialogComponent;
  let fixture: ComponentFixture<ExpenseInputsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseInputsDialogComponent]
    });
    fixture = TestBed.createComponent(ExpenseInputsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
