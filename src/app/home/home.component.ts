import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  displayedColumns: string[] = ['name', 'nickname', 'email', 'number', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
  }

  search: string = '';


}

export interface PeriodicElement {
  name: string;
  email: string;
  number: string;
  nickname: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
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
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'},
  {name: 'Nome do contato', email: 'email@email.com',  number: '(62) 99999-9999', nickname: 'nickname'}
];
