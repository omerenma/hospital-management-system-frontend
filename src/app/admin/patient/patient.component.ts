import { Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs'
import { AuthService } from '../services/auth.service';
import { RegisterUser } from '../interfaces/users';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(private authService:AuthService){}
   close:boolean = false
   doctors$!:Observable<RegisterUser[]>


  ngOnInit(): void {
    this.getAllDoctors()
  }
  showBook(){
     this.close  = !this.close
  }
  getAllDoctors(){
   this.doctors$ = this.authService.getDoctors()
  }
}
