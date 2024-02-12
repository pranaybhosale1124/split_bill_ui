import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseRoutingModule } from './expense-routing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ExpenseShowComponent } from './expense-show/expense-show.component';
import { ExpensesAllComponent } from './expenses-all/expenses-all.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    ExpenseCreateComponent,
    ExpenseShowComponent,
    ExpensesAllComponent
  ],
  imports: [
    ExpenseRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatDialogModule
  ]
})
export class ExpensesModule { }
