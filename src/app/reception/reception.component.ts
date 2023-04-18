import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import {Router} from '@angular/router'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../services/patients.service';
import {Observable} from 'rxjs'
import { Patient } from '../interfaces/patient';
import { getAuth } from '../landing/state/auth.selector';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
})
export class ReceptionComponent implements OnInit {
  constructor(private patient: PatientsService, private getPatient:PatientsService, private stroe:Store, private router:Router) {  }
  patients$!: Observable<Patient[]>
  patients: Patient[] = []
  form!: FormGroup;
  message!:string
  searchText = "";
  receptionist_name!:string


  close: boolean = false;
  p: number = 1;
  faUser = faUser;
  name!: string;
  sex!:string;
  dob!:string;
  email!: string;
  phone_no!: string;
  residential_address!: string;
 date!:string;
  next_of_kin_name!: string;
  next_of_kin_phone_no!: string;

  ngOnInit(): void {

    this.stroe.select(getAuth).subscribe(data => {
      if(!data){
        console.log("No data in state")
        this.router.navigate(["/unauthorised"])
      }
      this.receptionist_name = data.name
    })
     this.getAllPatients()
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      sex: new FormControl(null,[Validators.required]),
      dob: new FormControl(null,[Validators.required]),
      date: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone_no: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      residential_address: new FormControl(null, [Validators.required]),
      next_of_kin_name: new FormControl(null, [Validators.required]),
      next_of_kin_phone_no: new FormControl(null, [Validators.required]),
    });

  }


  showAddPatient() {
    this.close = !this.close;
  }
  selectSex(event:any){
    this.sex = event.target.value
  }
  onSubmit() {
      this.name = this.form.value.name,
      this.dob = this.form.value.dob,
      this.date = this.form.value.date,
      this.email = this.form.value.email,
      this.phone_no = this.form.value.phone_no,
       this.date= this.form.value.date,
      this.residential_address = this.form.value.residential_address,
      this.next_of_kin_name = this.form.value.next_of_kin_name;
      this.next_of_kin_phone_no = this.form.value.next_of_kin_phone_no;

    const data = {
      name: this.form.value.name,
      sex:this.sex,
      dob:this.form.value.dob,
      date: this.form.value.date,
      email: this.form.value.email,
      phone_no: this.form.value.phone_no,
      residential_address: this.form.value.residential_address,
      next_of_kin_name: this.form.value.next_of_kin_name,
      next_of_kin_phone_no: this.form.value.next_of_kin_phone_no,
    };
    console.log(data)
    this.patient.addPatient(data).subscribe(value => {
    this.message = value.message
    if(value){
      this.form.reset()
    }
    })
  }
getAllPatients(){
  this.patients$ = this.patient.getPatient()
}

}
