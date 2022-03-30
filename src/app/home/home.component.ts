import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Contact } from '../models/contact';
import { OpenModalsService } from '../services/open-modals.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  activeFilter: string = 'NAME';
  search: string = '';
  displayedColumns: string[] = ['name', 'nickname', 'email', 'number', 'actions'];
  dataSource = new MatTableDataSource<Contact>(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private modalService: OpenModalsService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  update(element: Contact){
    this.modalService.openEditModal(element);
  }

  delete(element: Contact){
    this.modalService.openDeleteModal(element);
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

const ELEMENT_DATA: Contact[] = [
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '62999999999', nickname: 'nickname'}
];
