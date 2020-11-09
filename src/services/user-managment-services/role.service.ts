import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient,) { }

  getRoles(): Observable<any> {
    return this.http.get(this.baseUrl+'roles');
   }
   
  getroleById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'roles'+ '/' + id);
  }

  createrole(role): Observable<any> {
    return this.http.post(this.baseUrl+'roles', role);
  }

  updaterole(role): Observable<any> {
   return this.http.put(this.baseUrl + 'roles/' + role.id , role);
  }

  deleterole(id: number) {
    return this.http.delete(this.baseUrl+'roles'+ '/' + id );
  }

}
