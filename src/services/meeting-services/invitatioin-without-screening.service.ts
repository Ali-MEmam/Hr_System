import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvitatioinWithoutScreeningService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient,) { }

  getCandidates(): Observable<any> {
    return this.http.get('http://localhost:3000/candidate');
   }

  //  invitationWithoutSreening
   
  getPreselectedCandidates(): Observable<any> {
    return this.http.get('http://localhost:3000/preselectedCandidate');
   }


   getInvitationWithoutSreeningCandidates(): Observable<any> {
     return this.http.get('http://localhost:3000/invitationWithoutSreening');
    }
    addInvitationWithoutSreeningCandidates(candidateObj):Observable<any> {
      return this.http.post('http://localhost:3000/invitationWithoutSreening' ,candidateObj);

    }
    
    deleteInvitationWithoutSreeningCandidates(id): Observable<any> {
      return this.http.delete('http://localhost:3000/invitationWithoutSreening/'+ id);

    }
    deletePreSelectedCandidates(i): Observable<any> {
      return this.http.delete('http://localhost:3000/preselectedCandidate/'+ i);
    }
   addPreselectedCandidates(obj): Observable<any> {
    return this.http.post('http://localhost:3000/preselectedCandidate',obj);
   }
   getAllTest(): Observable<any> {
    return this.http.get('http://localhost:3000/tests');
   }
}
