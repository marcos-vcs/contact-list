import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact, ContactWithId } from '../models/contact';

interface ToSend{
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

  create(contact: Contact) : Observable<ContactWithId> {

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

    return this.http.post<ContactWithId>(environment.apiUrl, toSend);
  }

  update(contact: Contact) : Observable<ContactWithId> {

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

    return this.http.put<ContactWithId>(`${environment.apiUrl}`, toSend);
  }

  readWithFilter(filter: string, value: string) : Observable<ContactWithId[]> {
    return this.http.get<ContactWithId[]>(
      `${environment.apiUrl}/filter?filterType=${filter}&filterValue=${value}`);
  }

  read() : Observable<ContactWithId[]> {
    return this.http.get<ContactWithId[]>(environment.apiUrl);
  }

  delete(id: number){
    return this.http.delete<Contact>(`${environment.apiUrl}/${id}`);
  }

}
