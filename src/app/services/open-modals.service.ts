import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  openDeleteModal(contact: Contact){
    const title = 'Tem certeza que deseja excluir?';
    const message = 'Caso prossiga o contato não poderá ser recuperado, realmente tem certeza que deseja continuar?';
    const dialogData = new ConfirmDialogModel(title, message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: dialogData
      }
    );

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        this.crudService.delete(contact);
      }
    });

  }

  openAboutModal(){
    const dialogRef = this.dialog.open(AboutComponent, {
      maxWidth: '500px',
      maxHeight: '90vh',
      }
    );

    dialogRef.afterClosed().subscribe(result => {

      }
    );

  }

}
