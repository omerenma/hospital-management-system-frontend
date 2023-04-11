import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from '../services/patients.service';
import {Observable} from 'rxjs'
import { Patient } from '../interfaces/patient';

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css'],
})
export class ReceptionComponent implements OnInit {
  constructor(private patient: PatientsService, private getPatient:PatientsService) {  }
  patients$!: Observable<Patient[]>
  patients: Patient[] = []
  form!: FormGroup;
  message!:string
  searchText = "";


  close: boolean = false;
  p: number = 1;
  faUser = faUser;
  name!: string;
  email!: string;
  phone_no!: string;
  residential_address!: string;
  room_admitted!: string;
  id_no!: string;
  admission_no!: string;
  next_of_kin_name!: string;
  next_of_kin_phone_no!: string;
  status!: string;

  ngOnInit(): void {
     this.getAllPatients()
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone_no: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ]),
      residential_address: new FormControl(null, [Validators.required]),
      room_admitted: new FormControl(null, [Validators.required]),
      id_no: new FormControl(null, [Validators.required]),
      admission_no: new FormControl(null, [Validators.required]),
      next_of_kin_name: new FormControl(null, [Validators.required]),
      next_of_kin_phone_no: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
    });
  }


  showAddPatient() {
    this.close = !this.close;
  }
  onSubmit() {
    this.name = this.form.value.name,
      this.email = this.form.value.email,
      this.phone_no = this.form.value.phone_no,
      this.residential_address = this.form.value.residential_address,
      this.room_admitted = this.form.value.room_admitted,
      this.id_no = this.form.value.id_no,
      this.admission_no = this.form.value.admission_no;
    this.next_of_kin_name = this.form.value.next_of_kin_name;
    this.next_of_kin_phone_no = this.form.value.next_of_kin_phone_no;
    this.status = this.form.status

    const data = {
      name: this.form.value.name,
      email: this.form.value.email,
      phone_no: this.form.value.phone_no,
      residential_address: this.form.value.residential_address,
      room_admitted: this.form.value.room_admitted,
      id_no: this.form.value.id_no,
      admission_no: this.form.value.admission_no,
      next_of_kin_name: this.form.value.next_of_kin_name,
      next_of_kin_phone_no: this.form.value.next_of_kin_phone_no,
      status:this.form.value.status
    };
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
