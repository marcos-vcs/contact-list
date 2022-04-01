import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact, ContactWithId } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ApiCommunicationService {

  constructor(private http: HttpClient) { }

  create(contact: Contact) : Observable<ContactWithId> {
    return this.http.post<ContactWithId>(environment.apiUrl, contact);
  }

  update(contact: Contact) : Observable<ContactWithId> {
    return this.http.put<ContactWithId>(`${environment.apiUrl}`, contact);
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
