import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student, StudentService } from '../service/student.service';
import { EditStudentService } from '../service2/edit-student.service';



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
  sData : Array<any>;

  constructor(
    private service: EditStudentService,
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
  ) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.sId2 = data;
      console.log(this.sId2);
    });
    this.studentService.getId(1).subscribe(data => {
      this.sData = data;
    
      console.log(this.sData);
    });

    // this.service.getCustomer(this.date,this.dateEnd).subscribe(data => {
    //   this.Customers = data;
    // });
    }

    
  goStudent(){
    this.router.navigate(['/student']).then(() => {
      
    });
  }

}
