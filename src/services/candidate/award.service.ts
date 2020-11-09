import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AwardService {
  
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }

  addaWard(profile): Observable<any> {
    return this.http.post(this.baseUrl+'awards', profile);

    // return this.http.post(this.baseUrl+'awards'+'/'+'add', profile);
  }

  getAWardById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'awards'+'/' +'find'+'/'+id);
  }

  deleteAward(id: number) {
    return this.http.delete(this.baseUrl+'awards'+ '/' +'remove' + '/' +id );
  }

  updateAward(skill): Observable<any> {
    return this.http.put(this.baseUrl + 'awards'+'/'+"change"+'/'+skill.id , skill);
   }

  getAwards(): Observable<any> {
    return this.http.get(this.baseUrl+'awards'+'/'+'findall');
   }

   getAllAwardsForUser(userId):Observable<any>{
     return this.http.get(this.baseUrl+'awards'+'/'+'findall'+'/'+userId)
   }
}
