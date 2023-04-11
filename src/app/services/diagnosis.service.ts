import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Diagnosis } from '../interfaces/diagnosis';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http:HttpClient) { }

  getDiagnosisForUser(email:string): Observable<Diagnosis>{
    return this.http.post<Diagnosis>("http://localhost:5000/api/diagnosis/user", {email})
  }

  addTreatment(data:Diagnosis): Observable<{message:string}>{
    return this.http.post<{message:string}>("http://localhost:5000/diagnosis/add", data)
  }
}

