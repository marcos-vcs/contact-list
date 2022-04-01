import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../models/contact';
import { ApiCommunicationService } from '../services/api-communication.service';
import { OpenModalsService } from '../services/open-modals.service';

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
    private modalService: OpenModalsService,
    private apiService: ApiCommunicationService,
    public dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

  validForm(){

    const regexEmail = new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$");

    var isValid = true;

    if(this.data.contact.name.length < 4 || this.data.contact.name.length > 50){
      this.validName = true;
      isValid = false;
    }else{
      this.validName = false;
    }

    if(this.data.contact.number.length !== 11){
      this.validNumber = true;
      isValid = false;
    }else{
      this.validNumber = false;
    }

    if(this.data.contact.nickname.length != 0 && this.data.contact.nickname.length < 3 || this.data.contact.nickname.length > 50){
      this.validNickName = true;
      isValid = false;
    }else{
      this.validNickName = false;
    }

    if(!regexEmail.test(this.data.contact.email) && this.data.contact.email.length != 0 ){
      console.log(this.data.contact.email);
      this.validEmail = true;
      isValid = false;
    }else{
      this.validEmail = false;
    }

    if(isValid){
      this.create(this.data.contact);
      this.onDismiss();
    }

  }

  private create(contact: Contact){

    if(this.data.isNew){
      this.apiService.create(contact).subscribe(
        (data) => {
          console.log(data);
          debugger;
          this.modalService.openSnackbarSuccess("Contato criado com sucesso!");
          setTimeout(() => {
            location.reload();
          },3000);
        },
        (error) => {

          console.log(error);
          if(error.error.arguments.email){
            this.modalService.openSnackbarAlert("Erro ao criar contato: " +  error.error.arguments.email);
          }else if(error.error.arguments.name){
            this.modalService.openSnackbarAlert("Erro ao criar contato: " +  error.error.arguments.name);
          }else if(error.error.arguments.number){
            this.modalService.openSnackbarAlert("Erro ao criar contato: " +  error.error.arguments.number);
          }else if(error.error.arguments.nickname){
            this.modalService.openSnackbarAlert("Erro ao criar contato: " +  error.error.arguments.nickname);
          }
          else{
            this.modalService.openSnackbarAlert("Não foi possível criar o contato!");
          }

          debugger;
          setTimeout(() => {
            location.reload();
          },3000);

        }
      );
    }else{
      this.apiService.update(contact).subscribe(
        (data) => {
          this.modalService.openSnackbarSuccess("Contato atualizado com sucesso!");
          setTimeout(() => {
            location.reload();
          },3000);
        },
        (error) => {
          if(error.error.arguments.email){
            this.modalService.openSnackbarAlert("Erro ao atualizar contato: " +  error.error.arguments.email);
          }else if(error.error.arguments.name){
            this.modalService.openSnackbarAlert("Erro ao atualizar contato: " +  error.error.arguments.name);
          }else if(error.error.arguments.number){
            this.modalService.openSnackbarAlert("Erro ao atualizar contato: " +  error.error.arguments.number);
          }else if(error.error.arguments.nickname){
            this.modalService.openSnackbarAlert("Erro ao atualizar contato: " +  error.error.arguments.nickname);
          }
          else{
            this.modalService.openSnackbarAlert("Não foi possível atualizar o contato!");
          }

          setTimeout(() => {
            location.reload();
          },3000);
        }
      );
    }

  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
