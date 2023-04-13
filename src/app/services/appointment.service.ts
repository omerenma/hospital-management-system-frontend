import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Appointment } from '../interfaces/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private http: HttpClient) { }
  addAppointment(data:Appointment):Observable<{message:string}> {
    return this.http.post<{message:string}>("http://localhost:5000/appointment/add", data)
  }
  getAppointment(): Observable<Appointment[]>{
    return this.http.get<Appointment[]>("http://localhost:5000/appointment/get")
  }
}
