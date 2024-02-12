import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesAllComponent } from './expenses-all.component';

describe('ExpensesAllComponent', () => {
  let component: ExpensesAllComponent;
  let fixture: ComponentFixture<ExpensesAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensesAllComponent]
    });
    fixture = TestBed.createComponent(ExpensesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
