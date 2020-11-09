import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  public sidebarChart = new BehaviorSubject(0);
  updatedSidebarChart = this.sidebarChart.asObservable();

  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }

  addPortfolio(Portfolio): Observable<any> {
    return this.http.post(this.baseUrl+'portfolios', Portfolio);

    // return this.http.post(this.baseUrl+'portfolios'+'/'+'add', Portfolio);
  }

  getPortfolioById(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'portfolios'+'/' +'find'+'/'+id);
  }

  deletePortfolio(id: number) {
    return this.http.delete(this.baseUrl+'portfolios'+ '/' +'remove' + '/' +id );
  } 

  updatePortfolio(skill): Observable<any> {
    return this.http.put(this.baseUrl + 'portfolios'+'/'+"change"+'/'+skill.id , skill);
   }

  getPortfolios(): Observable<any> {
    return this.http.get(this.baseUrl+'portfolios'+'/'+'findall');
   }

   getAllPortfoliosForUser(userId):Observable<any>{
     return this.http.get(this.baseUrl+'portfolios'+'/'+'findall'+'/'+userId)
   }
}
