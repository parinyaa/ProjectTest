import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StudentService } from '../service/student.service';
import { EditStudentService } from '../service2/edit-student.service';
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
  names : Array<any>;
  lastnames : Array<any>;
  majors : Array<any>
  bdate : Date;
  studentData : Array<any>;
   
 
  displayedColumns: string[] = ['sId', 'name', 'lastname', 'major','bDate','action','action2'];
 

  constructor(
    private service: EditStudentService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private studentService: StudentService,
    public notification: NotificationService
    
  ) { }

  ngOnInit() {

    this.studentService.getAll().subscribe(data => {
      this.students = data;
      console.log(this.students);

    });  
    
  }



    
  goStudent(){
    this.router.navigate(['/student']).then(() => {
      
    });
  }
  getId(sId : any){
      this.studentService.getId(sId).subscribe(data => {
      this.studentData = data;
        console.log(this.studentData);
    });
  }

  deleteStu(sId : any) {

        if (confirm('Are you sure want to delete id = ' + sId)) {
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
}
