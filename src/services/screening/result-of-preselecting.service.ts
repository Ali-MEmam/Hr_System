import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResultOfPreselectingService {

  constructor(private http:HttpClient) { }
  baseUrl =environment.baseURl;

  getPreselectingList(): Observable<any> {
    return this.http.get(this.baseUrl+'preselectedCandidate');
   }
   getPreselectingListById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'preselectedCandidate'+ '/' + id);
  }
}
