import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';

interface ToSend{
  id?: number;
  name?: string;
  email?: string;
  number?: string;
  nickname?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  constructor(private http: HttpClient) { }

  create(contact: Contact) : Observable<Contact> {

    var toSend: ToSend = {
      name: contact.name,
      email: contact.email,
      number: contact.number,
      nickname: contact.nickname
    }
    if(contact.name === ''){
      delete toSend.name;
    }
    if(contact.email === ''){
      delete toSend.email;
    }
    if(contact.number === ''){
      delete toSend.number;
    }
    if(contact.nickname === ''){
      delete toSend.nickname;
    }

    return this.http.post<Contact>(environment.apiUrl, toSend);
  }

  update(contact: Contact) : Observable<Contact> {

    var toSend: ToSend = {
      id: contact.id,
      name: contact.name,
      email: contact.email,
      number: contact.number,
      nickname: contact.nickname
    }
    if(contact.name === ''){
      delete toSend.name;
    }
    if(contact.email === ''){
      delete toSend.email;
    }
    if(contact.number === ''){
      delete toSend.number;
    }
    if(contact.nickname === ''){
      delete toSend.nickname;
    }

    return this.http.put<Contact>(`${environment.apiUrl}`, toSend);
  }

  readWithFilter(filter: string, value: string) : Observable<Contact[]> {
    return this.http.get<Contact[]>(
      `${environment.apiUrl}/filter?filterType=${filter}&filterValue=${value}`);
  }

  read() : Observable<Contact[]> {
    return this.http.get<Contact[]>(environment.apiUrl);
  }

  delete(id: number){
    return this.http.delete<Contact>(`${environment.apiUrl}/${id}`);
  }

}
