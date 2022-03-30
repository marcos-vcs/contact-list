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


}

const ELEMENT_DATA: Contact[] = [
  {name: 'Nome do contato 1', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato 2', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato 3', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato 4', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato 5', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'}
];
