import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { StudentService, Student } from 'src/app/service/student.service';
// import { DialogService } from 'src/app/dialog/dialog.service';
import { from } from 'rxjs';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public API: string = "http://localhost:8090";

  student : Student = new Student();
  sId : Array<any>
  sId2 : number;
  names : Array<any>;
  lastnames : Array<any>;
  majors : Array<any>
  bdate : Date;

  

  constructor(
    private studentService : StudentService,
    private httpClient: HttpClient, 
    // private dialog: DialogService,       
    private router: Router,
    public notification: NotificationService
  
  ) { }

  ngOnInit() {

  }
  goEditStudent(){
    this.router.navigate(['/edit-student']);
  }

  save(){
    this.httpClient.post(this.API + '/newStudent', this.student).subscribe((data) => {
      console.log("Congratulations^^");
      console.log(data);
      this.notification.saveSuccess();      
      
    }, err => {
      console.log("Error Happen!!!!");
      // this.dialog.foundNull();
    });
  }

}
