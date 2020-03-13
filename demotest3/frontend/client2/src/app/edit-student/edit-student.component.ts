import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StudentService } from '../service/student.service';
import { HttpClient} from '@angular/common/http';
import { NotificationService } from '../service/notification.service';




@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  
  public API: string = "http://localhost:8090";
  
  student: Student = new Student();
  sId : number; 
  students : Array<Student>
  // names : Array<any>;
  // lastname : Array<any>;
  // major : Array<any>
  // bDate :Date;
  studentData : Array<any>;
  enableEdit = false;
  enableEditIndex = null; 
   

  displayedColumns: string[] = ['sId', 'name', 'lastname', 'major','bDate','action','action2'];

  
  sid: any;
  major1: any;
  name1: any;
  lastname1: any;
  bDate1 : Date;

  constructor(    
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private studentService: StudentService,
    public notification: NotificationService,
    
  ) {     
  }

  ngOnInit() {

    this.studentService.getAll().subscribe(data => {
      this.students = data;
      // console.log(this.students);
    }); 
  
  }
    
  goStudent(){
    this.router.navigate(['/student']).then(() => {      
    });
  }
  getId(sId : any){
      this.studentService.getId(sId).subscribe(data => {
      this.studentData = data;
        // console.log(this.studentData);
    });
  }

  deleteStu(sId : any) {

        if (confirm('คุณต้องการจะลบ ID = ' + sId + ' ใช่หรือไม่')) {
          this.studentService.deleteStu(sId).subscribe(res => {
            console.log(res); 
          this.notification.success(); 
          
          this.studentService.getAll().subscribe(data => {
            this.students = data;
            console.log(this.students);            
          });  
        }, err => {     
          this.notification.error(); 
            console.log(err); 
        });
      }
    }

    enableEditMethod(el: any) {
      this.enableEdit = true;     
      // this.enableEditIndex = i;
      console.log(el);
      this.sid = el.sId;
      this.name1 = el.name;
      this.lastname1 = el.lastname;
      this.major1 = el.major;
      this.bDate1 = el.bDate;
      console.log(this.bDate1);
    }

    cancel(){
      this.enableEdit = false; 
    }

    submitEdit() {
      this.student.sId = this.sid;      
      this.student.name = this.name1;
      this.student.lastname = this.lastname1;
      this.student.major = this.major1;     
      this.student.bDate = this.bDate1;
      this.student.bDate = new Date(this.student.bDate)
      console.log("---------------------");
      console.log(this.student);
      this.enableEdit = false;      
      this.saveEdit();     
    }

    saveEdit(){
      this.httpClient.post(this.API + '/editStudent' ,this.student).subscribe((data) => {
        console.log(this.bDate1);
        console.log("Okay!!!");
        console.log(data);    
        this.notification.saveSure();
        this.studentService.getAll().subscribe(data => {
          this.students = data;
          // console.log(this.students);
        });        
      }, err => {
        console.log("Error Happen!!!!");        
      });
    }

}
