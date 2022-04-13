import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  rec_pass: boolean = false

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get("/assets/mock/cities.json")
  }

  getSchools(): Observable<any> {
    return this.http.get("/assets/mock/schools.json")
  }

  getSubject(): Observable<any> {
    return this.http.get("/assets/mock/subject.json")
  }

  getCode(): Observable<any> {
    return this.http.get("/assets/mock/codes.json")
  }

  getCountry(): Observable<any> {
    return this.http.get("/assets/mock/countres.json")
  }
}
