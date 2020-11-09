import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  public sidebarChart = new BehaviorSubject(0); 
  updatedSidebarChart = this.sidebarChart.asObservable();

  baseUrl =environment.baseURl;
candidate_id;
  constructor(private http:HttpClient) { }

  addSkill(skills): Observable<any> {
    return this.http.post(this.baseUrl+"skills",skills)
    // return this.http.post('http://localhost:3000/skills', skills);
    /* 'http://localhost:3000/skills' */
    /* this.baseUrl+'skills'+'/'+'add', profile */

  }

  getSkillById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'skills'+'/' +'find'+'/'+id);
  }

  deleteSkills(id: number) {
    return this.http.delete(this.baseUrl+'skills'+ '/' +'remove' + '/' +id );
  }

  updateSkill(skill): Observable<any> {
    return this.http.put(this.baseUrl + 'skills'+'/'+"change"+'/'+skill.id , skill);
   }

   getSkills(): Observable<any> {
    return this.http.get('http://localhost:3000/skills');

    /* 'http://localhost:3000/skills' */
    /* this.baseUrl+'skills'+'/'+'findall' */
   }
   getEducation(): Observable<any> {
     return this.http.get('http://localhost:3000/education');
 
     /* 'http://localhost:3000/skills' */
     /* this.baseUrl+'skills'+'/'+'findall' */
    }
    getExperience(): Observable<any> {
      return this.http.get('http://localhost:3000/experience');
  
      /* 'http://localhost:3000/skills' */
      /* this.baseUrl+'skills'+'/'+'findall' */
     }

   getAllSkillsForUser(userId):Observable<any>{
     return this.http.get(this.baseUrl+'skills'+'/'+'findall'+'/'+userId)
   }

}
