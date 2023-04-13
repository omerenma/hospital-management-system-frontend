import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/interfaces/appointment';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
  constructor(private appointment:AppointmentService){}
  appointments$!:Observable<Appointment[]>


  p: number = 1;
  collection: any[] = [1,2];
  ngOnInit():void{
    this.getAppointment()
  }

  getAppointment(){
    this. appointments$= this.appointment.getAppointment()
  }

}
