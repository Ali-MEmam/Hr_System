import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EducationService {
  public sidebarChart = new BehaviorSubject(0);
  updatedSidebarChart = this.sidebarChart.asObservable(); 
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }

  addEducation(profile): Observable<any> {
    return this.http.post(this.baseUrl+"education",profile)
    // return this.http.post(this.baseUrl+'education'+'/'+'add', profile);
  }

  getEducationById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'education'+'/' +'find'+'/'+id);
  }

  deleteEducation(id: number) {
    return this.http.delete(this.baseUrl+'education'+ '/' +'remove' + '/' +id );
  }

  updateEducation(skill): Observable<any> {
    return this.http.put(this.baseUrl + 'education'+'/'+"change"+'/'+skill.id , skill);
   }

  geteducation(): Observable<any> {
    return this.http.get('http://localhost:3000/education');

    /* 'http://localhost:3000/education' */
    /* this.baseUrl+'education'+'/'+'findall' */
   }

   getAlleducationForUser(userId):Observable<any>{
     return this.http.get(this.baseUrl+'education'+'/'+'findall'+'/'+userId)
   }
}
