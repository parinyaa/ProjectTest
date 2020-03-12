import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  public APT = 'http://localhost:8090';

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<any> {
    return this.http.get(this.APT + '/Student');
  
  }

  getId(sId :any): Observable<any> {
    return this.http.get(this.APT + '/Student/' + sId);
  
  }

  deleteStu(sId: any): Observable<any> {
    return this.http.delete(this.APT + '/EditStudent/' + sId);
  
  }

}



export class Student {
  sId : any;
  name : any ;
  lastname : any;
  bDate : Date; 
  key: any;

}



