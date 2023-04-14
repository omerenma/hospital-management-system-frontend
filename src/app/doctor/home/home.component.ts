import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Observable} from 'rxjs'
import { Patient } from 'src/app/interfaces/patient';
import { Diagnosis } from 'src/app/interfaces/diagnosis';
import { PatientsService } from 'src/app/services/patients.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { DiagnosisService } from 'src/app/services/diagnosis.service';
import {Store} from '@ngrx/store'
import {Router} from '@angular/router'
import { getAuth } from 'src/app/landing/state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private patients: PatientsService, private diagnosis:DiagnosisService, private store:Store, private router:Router){}
  form!:FormGroup
  patients$!: Observable<Patient[]>
  close:boolean = false
  faUser = faUser
  p: number = 1;
  patientemail!:string
  collection: any[] = [1,2,3,4];
  message!:string

      treatment_name!:string
      drug_administered!:string
      doctor_name!:string
      patient_email!:string
      description!:string
      patient_status!:string
      doctor_email!:string
      bill!:string
      date!:string
      paid!:string

  showAddPatient(email : string){
    this.patientemail = email
    console.log(this.patientemail)
    this.close = !this.close

  }
  closeAdd(){ this.close = !this.close}

  getPatients(){this.patients$ =  this.patients.getPatient()}

  ngOnInit(): void {
    this.store.select(getAuth).subscribe(data => {
      if(!data){
        this.router.navigate(["/unauthorised"])
      }
    })
    this.getPatients()

    this.form = new FormGroup({
      treatment_name : new FormControl(null, [Validators.required]),
      drug_administered : new FormControl(null, [Validators.required]),
      doctor_name : new FormControl(null, [Validators.required]),
      patient_email : new FormControl(null, [Validators.required]),
      description : new FormControl(null, [Validators.required]),
      patient_status : new FormControl(null, [Validators.required]),
      doctor_email : new FormControl(null, [Validators.required]),
      bill : new FormControl(null, [Validators.required]),
      date : new FormControl(null, [Validators.required]),
      paid : new FormControl(null, [Validators.required]),
    })

  }
onSubmit(){
      // this.treatment_name= this.form.value.treatment_name;
      // this.drug_administered= this.form.value.drug_administered;
      // this.patient_email= this.patientemail;
      // this.description= this.form.value.description;
      // this.patient_status= this.form.value.description;
      // this.doctor_email= this.form.value.doctor_email;
      // this.bill= this.form.value.bill;
      // this.date= this.form.value.date;

      const data = {
        treatment_name: this.form.value.treatment_name,
        drug_administered: this.form.value.drug_administered,
        doctor_name: this.form.value.doctor_name,
        patient_email: this.patientemail,
        description: this.form.value.description,
        patient_status: this.form.value.patient_status,
        bill: this.form.value.bill,
        date: this.form.value.date,
        paid: this.form.value.paid
      }
      console.log(data)
       this.diagnosis.addTreatment(data).subscribe(value => {
         if(value){
           this.message = value.message
           this.form.reset()
         }
       })
}
}
