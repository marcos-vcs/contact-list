import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  contact: Contact = {
    name: "",
    number: "",
    nickname: "",
    email: ""
  };
  validName: boolean = false;
  validNumber: boolean = false;
  validEmail: boolean = false;
  validNickName: boolean = false;

  constructor(public dialogRef: MatDialogRef<CreateComponent>) { }


  ngOnInit(): void {
  }

  validForm(){

    const regexEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

    var isValid = false;

    if(this.contact.name.length < 3 || this.contact.name.length > 50){
      this.validName = true;
      isValid = true;
    }else{
      this.validName = false;
    }
    if(this.contact.number.length !== 11){
      this.validNumber = true;
      isValid = true;
    }else{
      this.validNumber = false;
    }
    if(this.contact.nickname.length != 0 && this.contact.nickname.length < 3 || this.contact.nickname.length > 50){
      this.validNickName = true;
      isValid = true;
    }else{
      this.validNickName = false;
    }
    if(!regexEmail.test(this.contact.email)){
      this.validEmail = true;
      isValid = true;
    }else{
      this.validEmail = false;
    }

    if(!isValid){
      console.log("criando...");
      this.create(this.contact);
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
