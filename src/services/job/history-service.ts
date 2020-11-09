import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class HistoryService {
  baseUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  getAllHistory(): Observable<any> {
    return this.http.get(this.baseUrl + 'history/');
  }

  getHistoryById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'history' + '/' + id);
  }

  addHistory(historyObj): Observable<any> {
    return this.http.post(this.baseUrl + 'history/', historyObj);
  }

  deleteHistory(id): Observable<any> {
    return this.http.delete(this.baseUrl + "history/" + id);
  }

}
