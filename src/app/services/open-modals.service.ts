import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AboutComponent } from '../about/about.component';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../confirm-dialog/confirm-dialog.component';
import { CreateComponent } from '../create/create.component';
import { Contact } from '../models/contact';
import { ApiCommunicationService } from './api-communication.service';

@Injectable({
  providedIn: 'root'
})
export class OpenModalsService {


  constructor(
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private crudService: ApiCommunicationService) {}

  openCreationModal(){
    var contact : Contact = {
      email: '',
      name: '',
      nickname: '',
      number: ''
    }

    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
      height: '90vh',
      disableClose: true,
      data: {
        contact: contact,
        isNew: true
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {

    }
    );
  }

  openEditModal(contact: Contact){

    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
      height: '90vh',
      disableClose: true,
      data: {
        contact: contact,
        isNew: false
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {

    }
    );
  }

  openDeleteModal(id: number){
    const title = 'Tem certeza que deseja excluir?';
    const message = 'Caso prossiga o contato não poderá ser recuperado, realmente tem certeza que deseja continuar?';
    const dialogData = new ConfirmDialogModel(title, message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data: dialogData
      }
    );

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.crudService.delete(id).subscribe(
          (data) => {

              this.openSnackbarSuccess('Contato excluído com sucesso!');
              setTimeout(() => {location.reload();}, 2000);

          },
          (error) => {
            console.log(error);
            this.openSnackbarAlert('Erro ao excluir contato!');
          }
        );
      }
    });

  }

  openAboutModal(){
    const dialogRef = this.dialog.open(AboutComponent, {
      width: '500px',
      maxHeight: '90vh',
      }
    );

    dialogRef.afterClosed().subscribe(result => {

      }
    );

  }

  openSnackbarAlert(msg: string){
    this._snackBar.open(msg, 'Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['red-snackbar','login-snackbar']
    });
  }
  openSnackbarSuccess(msg: string){
    this._snackBar.open(msg, 'Fechar', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 5000,
      panelClass: ['green-snackbar','login-snackbar']
    });
  }

}
