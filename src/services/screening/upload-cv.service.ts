import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadCvService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }
  
  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl+'upload/');
  }
  deletFiles(id){
    return this.http.delete(this.baseUrl+'upload/' + id)
  }
  deletFile(id){
    return this.http.delete(this.baseUrl+'upload/' + id)
  }
  addFiles(filesObj){
    return this.http.post(this.baseUrl+'upload/', filesObj);
  }

}
 