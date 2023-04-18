import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Admission, GetAdmission } from '../interfaces/admission';



@Injectable({
  providedIn: 'root'
})
export class AdmissionService {
  constructor(private http:HttpClient) { }

  addAdmission(user:Admission):Observable<{message:string}> {
    console.log(user, 'user admission')
    return this.http.post<{message: string}>('http://localhost:5000/admission/add', user)
  }

  getAdmission():Observable<GetAdmission[]>{
    return this.http.get<GetAdmission[]>('http://localhost:5000/admission/get')
  }
}
