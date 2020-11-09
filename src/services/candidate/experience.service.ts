import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  public sidebarChart = new BehaviorSubject(0); 
  updatedSidebarChart = this.sidebarChart.asObservable();

  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }

  addExperience(experience): Observable<any> {
    return this.http.post(this.baseUrl+'experiences',experience);
    // return this.http.post(this.baseUrl+'experiences'+'/'+'add', experience);
  }

  getExperienceById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'experiences'+'/' +'find'+'/'+id);
  }

  deleteExperience(id: number) {
    return this.http.delete(this.baseUrl+'experiences'+ '/' +'remove' + '/' +id );
  }

  updateExperience(skill): Observable<any> {
    return this.http.put(this.baseUrl + 'experiences'+'/'+"change"+'/'+skill.id , skill);
   }

  getExperiences(): Observable<any> {
    return this.http.get('http://localhost:3000/experience');
   }

   getAllExperiencesForUser(userId):Observable<any>{
     return this.http.get(this.baseUrl+'experiences'+'/'+'findall'+'/'+userId)
   }
}
