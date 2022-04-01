import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Contact, ContactWithId } from '../models/contact';
import { ApiCommunicationService } from '../services/api-communication.service';
import { OpenModalsService } from '../services/open-modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  isLoad: boolean = true;
  notfound: boolean = false;
  activeFilter: string = 'NAME';
  search: string = '';
  displayedColumns: string[] = ['name', 'number', 'email', 'nickname', 'actions'];
  dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private modalService: OpenModalsService,
    private apiRequest: ApiCommunicationService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.read();
  }

  enterFilter(event: any){
    if(event.keyCode === 13){
      this.filter();
    }
  }

  filter(){

    if (this.search.length > 4) {
      this.isLoad = true;
      this.apiRequest.readWithFilter(this.activeFilter, this.search).subscribe(
        (data) => {
          this.isLoad = false;
          this.dataSource.data = data;
          this.modalService.openSnackbarSuccess(
            'Contatos carregados com sucesso!'
          );
        },
        (error) => {
          console.log(error);
          this.isLoad = false;
            this.modalService.openSnackbarAlert('Erro ao carregar contatos!');
        }
      );
    }else if(this.search.length  <= 4 && this.search.length !== 0){
      this.modalService.openSnackbarAlert('Digite mais de 4 caracteres!');
    }else{
      this.read();
    }

  }

  read(){
    this.isLoad = true;
    this.notfound = false;
    this.apiRequest.read().subscribe(
      (data) => {
        this.modalService.openSnackbarSuccess("Contatos carregados com sucesso!");
        this.dataSource.data = data;
        this.isLoad = false;
        if(this.dataSource.data.length === 0){
          this.notfound = true;
        }

      },
      (error) => {
        console.log(error);
        this.notfound = true;
        this.isLoad = false;
          this.modalService.openSnackbarAlert('Erro ao carregar contatos!');
      }
    );
  }

  update(element: Contact){
    this.modalService.openEditModal(element);
  }

  delete(element: ContactWithId){
    this.modalService.openDeleteModal(element.id);
  }

  activeFilterName(){
    this.activeFilter = 'NAME';
  }

  activeFilterNickname(){
    this.activeFilter = 'NICKNAME';
  }

  activeFilterEmail(){
    this.activeFilter = 'EMAIL';
  }

  activeFilterNumber(){
    this.activeFilter = 'NUMBER';
  }


}

const ELEMENT_DATA: ContactWithId[] = [];
