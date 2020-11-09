import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  baseUrl = environment.baseURl;
  FormData;
  constructor(private http: HttpClient) { }
  getCandidateInvitation(id): Observable<any> {
    // countries.find(c => c.id === id);
    return this.http.get(this.baseUrl + "invitations/" + id);
    
  }
}
