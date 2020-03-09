import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StudentService } from '../service/student.service';
import { EditStudentService } from '../service2/edit-student.service';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  student: Student = new Student();
  sId : number; 
  sId2 : Array<any>
  names : Array<any>;
  lastnames : Array<any>;
  majors : Array<any>
  bdate : Date;
  studentData : Array<any>;
  public API: string = "http://localhost:8090";

  constructor(
    private service: EditStudentService,
    private router: Router,
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.sId2 = data;
      console.log(this.sId2);
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

  // save2(){
  //   console.log(this.student);
  // }
}
