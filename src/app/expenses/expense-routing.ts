// expense-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseShowComponent } from './expense-show/expense-show.component';
import { ExpensesAllComponent } from './expenses-all/expenses-all.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesAllComponent,
  },{
    path: 'expense',
    component: ExpenseShowComponent,
  },{
    path: 'create',
    component: ExpenseCreateComponent,
  },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseRoutingModule {}
