import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { StudentService, Student } from 'src/app/service/student.service';
import { from } from 'rxjs';
import { NotificationService } from '../service/notification.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

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
    private router: Router,
    public notification: NotificationService,
    public snackBar: MatSnackBar
  
  ) { }

  config: MatSnackBarConfig = {
    duration: 6000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  ngOnInit() {

  }
  goEditStudent(){
    this.router.navigate(['/edit-student']);
  }

  save(){
      if( this.student.name != null && this.student.lastname != null && this.student.major != null && this.student.bDate != null){
        this.httpClient.post(this.API + '/newStudent', this.student).subscribe((data) => {
          console.log("SaveSuccess^^");
          console.log(data);
          if(data == null){
            this.notification.saveError(); 
          }else{
            this.notification.saveSuccess(); 
          }                  
      
      }, err => {
        console.log("Error Happen!!!!");      
      });

      }else{
        console.log("คุณกรอกข้อมูลไม่ครบ");
        this.config['panelClass'] = ['notification','error'];
        this.snackBar.open('ไม่สามารถบันทึกข้อมูลได้กรุณากรอกให้ครบ','', this.config);

    }
  }
}
