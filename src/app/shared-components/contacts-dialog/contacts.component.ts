import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
  
})
export class ContactsComponent {

  searchText:string=""
  constructor(
    public dialogRef: MatDialogRef<ContactsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onContactSelect(contact:any): void {
    this.dialogRef.close(contact);
  }

  clearSearch(){
    this.searchText=''
  }
}
