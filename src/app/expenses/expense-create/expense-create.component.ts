import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { FormGroup, FormBuilder } from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import { ContactsComponent } from 'src/app/shared-components/contacts-dialog/contacts.component';
import { ExpenseInputsDialogComponent } from 'src/app/shared-components/expense-inputs-dialog/expense-inputs-dialog.component';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.scss']
})
export class ExpenseCreateComponent {

  constructor(private dialog: MatDialog) {}

  myContacts = [
    {
      "user_id": 1000,
      "user_name": "pranaybhosale1124",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "7208620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1001,
      "user_name": "Vadya@11111",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "7208425625",
      "user_trust_score": 0
    },
    {
      "user_id": 1002,
      "user_name": "Pratk@ty17",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9892178678",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
    {
      "user_id": 1003,
      "user_name": "roge@7868",
      "user_first_name": "Pranay",
      "user_last_name": "Bhosale",
      "user_password": "Pranay@11",
      "user_role": "user",
      "user_contact_number": "9078620325",
      "user_trust_score": 0
    },
  ]
  expenses: any[] = [];

  openExpenseDialog(expenseIndex: number,type:any): void {
    const dialogRef = this.dialog.open(ExpenseInputsDialogComponent, {
      width: 'min-content',
      data: {
        title: 'Add/Edit Expense',
        expenseName: this.expenses[expenseIndex]?.expenseName,
        totalAmount: this.expenses[expenseIndex]?.totalAmount
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if(type=='create'){
          this.expenses.push({
            expenseName: result.expenseName,
            totalAmount: result.totalAmount,
            contacts: []
          });
          this.openContactDialog(expenseIndex)
          return
        }
        this.expenses[expenseIndex].expenseName = result.expenseName;
        this.expenses[expenseIndex].totalAmount = result.totalAmount;
        this.calculateShare(expenseIndex)
      }
    });
  }

  addExpense(): void {
    this.expenses.push({
      expenseName: '',
      totalAmount: '',
      contacts: []
    });
  }

  addContact(expenseIndex: number): void {
    this.expenses[expenseIndex].contacts.push({
      profileIcon: 'User Profile', // Mocked value
      username: '', // You can fetch from a list
      splitAmount: ''
    });
  }

  createExpense(): void {
    console.log('Created Expenses:', this.expenses);
    // Add your logic to handle the created expenses
  }

  openContactDialog(expenseIndex: number): void {
    const dialogRef = this.dialog.open(ContactsComponent, {
      width: '400px',
      data: { contacts: this.myContacts }
    });

    dialogRef.afterClosed().subscribe((selectedContact) => {
      if (selectedContact) {
        this.expenses[expenseIndex].contacts.push({
          profileIcon: 'User Profile', // Mocked value
          username: selectedContact.user_name,
          splitAmount: ''
        });
        this.calculateShare(expenseIndex)
    }
    });
  }
  calculateShare(expenseIndex:number){
          // Divide the amount equally among all users
          const totalUsers = (this.expenses[expenseIndex].contacts.length)+1;
          const equalAmount = this.expenses[expenseIndex].totalAmount / totalUsers;
    
          // Update splitAmount for each user
          this.expenses[expenseIndex].contacts.forEach((contact:any) => {
            contact.splitAmount = equalAmount.toFixed(2); // Adjust the decimal places as needed
          });
  }
}
