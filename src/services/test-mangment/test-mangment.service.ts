import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestMangmentService {
  baseUrl = environment.baseURl;

  constructor(private http: HttpClient) { }

  gettestById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + "tests/" + id);
  }

  updatetest(testUpdate): Observable<any> {
    return this.http.put(this.baseUrl + "tests/" + testUpdate.id, testUpdate);
  }

  gettests(): Observable<any> {
    return this.http.get(this.baseUrl + "tests");
  }

  deleteTest(id): Observable<any> {
    return this.http.delete(this.baseUrl + "tests/" + id);
  }

  AddCategory(categoryObj): Observable<any> {
    return this.http.post(this.baseUrl + "category", categoryObj);
  }

  updateCategory(categoryObj): Observable<any> {
    return this.http.put(this.baseUrl + "category/" + categoryObj.id, categoryObj)
  }

  GetAllCategory(): Observable<any> {
    return this.http.get(this.baseUrl + "category");
  }

  getCategoryId(id): Observable<any> {
    return this.http.get(this.baseUrl + "category/" + id);
  }

  deleteCategory(id): Observable<any> {
    return this.http.delete(this.baseUrl + "category/" + id);
  }
  addCategory(obj): Observable<any> {
    return this.http.post(this.baseUrl+"category/",obj);
   }
}
