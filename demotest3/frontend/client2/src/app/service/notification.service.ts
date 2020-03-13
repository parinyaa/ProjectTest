import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  config: MatSnackBarConfig = {
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  }

  error(){
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('มีบางอย่างผิดพลาด, ลองใหม่อีกครั้ง !!!','', this.config);
  }

  success(){
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('Delete Success!!','', this.config);
  }

  saveSuccess(){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open('บันทึกข้อมูลสำเร็จ','', this.config);
  }

  saveSure(){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open('แก้ไขข้อมูลสำเร็จ','', this.config);
  }

  saveError(){
    this.config['panelClass'] = ['notification','success'];
    this.snackBar.open('มีข้อมูลในระบบแล้ว...','', this.config);
  }

}

