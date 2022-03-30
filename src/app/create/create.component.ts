import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../models/contact';

export interface DialogData {
  contact: Contact;
  isNew: boolean;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent{

  validName: boolean = false;
  validNumber: boolean = false;
  validEmail: boolean = false;
  validNickName: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  validForm(){

    const regexEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

    var isValid = false;

    if(this.data.contact.name.length < 3 || this.data.contact.name.length > 50){
      this.validName = true;
      isValid = true;
    }else{
      this.validName = false;
    }
    if(this.data.contact.number.length !== 11){
      this.validNumber = true;
      isValid = true;
    }else{
      this.validNumber = false;
    }
    if(this.data.contact.nickname.length != 0 && this.data.contact.nickname.length < 3 || this.data.contact.nickname.length > 50){
      this.validNickName = true;
      isValid = true;
    }else{
      this.validNickName = false;
    }
    if((this.data.contact.email.length != 0 && this.data.contact.email.length < 3 || this.data.contact.email.length > 50) && !regexEmail.test(this.data.contact.email)){
      this.validEmail = true;
      isValid = true;
    }else{
      this.validEmail = false;
    }

    if(!isValid){
      console.log("criando...");
      this.create(this.data.contact);
      this.onDismiss();
    }

  }

  private create(contact: Contact){

  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
