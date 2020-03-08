import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';




const routes: Routes = [
  {path: 'student', component: StudentComponent},  
  {path: 'edit-student', component: EditStudentComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
