import {Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Contact } from '../models/contact';
import { ApiCommunicationService } from '../services/api-communication.service';
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

  constructor(
    private modalService: OpenModalsService,
    private apiRequest: ApiCommunicationService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.read();
    if(this.dataSource.data.length > 0){

    }
  }

  read(){
    this.apiRequest.read().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (error) => {
        console.log(error);
      }
    );
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

const ELEMENT_DATA: Contact[] = [];
