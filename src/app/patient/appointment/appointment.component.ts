import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs'
import { RegisterUser } from 'src/app/interfaces/users';
import { AppointmentService } from 'src/app/services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  constructor(private getDoctors:AuthService, private appointmentService:AppointmentService ){}


  close:boolean = false
  p: number = 1;
  collection: any[] = [2];
  doctors$!:Observable<RegisterUser[]>
  form!:FormGroup
  patient_name!:string
  patient_email!:string
  doctor_email!:string
  date!:string
  message!:string


  ngOnInit(): void {
    this.getAllDoctors()
    this.form = new FormGroup({
      patient_name: new FormControl(null, [Validators.required]),
      patient_email: new FormControl(null, [Validators.required, Validators.email]),
      doctor_email: new FormControl(null, [Validators.required]),
      date:new FormControl(null, [Validators.required])
  })
  }
  showBook(email:string ){
    this.close = !this.close
    this.doctor_email = email
  }
  closeBook(){
    this.close = !this.close
  }
  getAllDoctors(){
 this.doctors$ =  this.getDoctors.getDoctors()
  }
  bookAppointment(){
    this.patient_email = this.form.value.patient_email
    this.patient_name = this.form.value.patient_name
    this.date = this.form.value.date

    const data = {
      patient_email:this.patient_email,
      patient_name:this.patient_name,
      doctor_email:this.doctor_email,
      date:this.date
    }
    this.appointmentService.addAppointment(data).subscribe(value => {
     this.message = value.message
    })

  }

}
