import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    private crudService: ApiCommunicationService) { }

  openCreationModal(){
    const dialogRef = this.dialog.open(CreateComponent, {
      width: '500px',
      height: '500px'
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
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

}
