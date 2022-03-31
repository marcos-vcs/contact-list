import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  constructor(private http: HttpClient) { }

  create(contact: Contact){
    console.log('criando...');
  }

  read() : Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:8080/api/v1/contact');
  }

  delete(contact: Contact){
    console.log(`deletando ${contact.name}...`);
  }


}
