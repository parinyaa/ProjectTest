import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditStudentService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  public APT = '//localhost:8090';

  constructor(private http: HttpClient) { }  
}

export class Student {
  sId : any;
  name : any ;
  lastname : any;
  bDate : Date;

}



