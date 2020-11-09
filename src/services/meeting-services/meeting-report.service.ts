import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MeetingReportService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient,) { }
  getMeetingConversationForCandidate(id): Observable<any> {
    return this.http.get(this.baseUrl + "conversations/" + id);
   }
}
