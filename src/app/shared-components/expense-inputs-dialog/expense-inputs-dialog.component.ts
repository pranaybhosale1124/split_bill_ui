import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expense-inputs-dialog',
  templateUrl: './expense-inputs-dialog.component.html',
  styleUrls: ['./expense-inputs-dialog.component.scss']
})

export class ExpenseInputsDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ExpenseInputsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
