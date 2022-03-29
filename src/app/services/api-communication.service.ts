import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  constructor() { }

  create(contact: Contact){
    console.log('criando...');
  }
  delete(contact: Contact){
    console.log(`deletando ${contact.name}...`);
  }


}
