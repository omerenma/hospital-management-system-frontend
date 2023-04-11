import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Patient } from '../interfaces/patient';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient) { }


    addPatient(data:Patient):Observable<{message:string}> {
      return this.http.post<{message:string}>("http://localhost:5000/patient/add", data)
    }

    getPatient():Observable<Patient[]>{
      return this.http.get<Patient[]>("http://localhost:5000/patient/")
    }

    getPatientById(id:string):Observable<Patient[]>{
      return this.http.get<Patient[]>(`http://localhost:5000/api/patient/add/${id}`)
    }

    udatePatient(id:number):Observable<{message:string}>{
      return this.http.put<{message:string}>(`http://localhost:5000/api/patient/patient/`, id)
    }
    deletePatient(id:number):Observable<{message:string}>{
      return this.http.delete<{message:string}>(`http://localhost:5000/api/patient/patient/${id}`)
    }
}
