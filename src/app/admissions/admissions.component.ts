import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patient } from '../interfaces/patient';
import { AdmissionService } from '../services/admission.service';
import { Admission, GetAdmission } from '../interfaces/admission';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.component.html',
  styleUrls: ['./admissions.component.css'],
})
export class AdmissionsComponent implements OnInit {
  constructor(
    private stroe: Store,
    private router: Router,
    private admissionService: AdmissionService
  ) {}
  admissions$!: Observable<GetAdmission[]>;
  patients: Patient[] = [];
  form!: FormGroup;
  message!: string;
  searchText = '';
  receptionist_name!: string;

  close: boolean = false;
  p: number = 1;
  faUser = faUser;
  date!: string;
  discharged_date!: string;
  admission_date!:string;
  card_number!:string;


  ngOnInit(): void {

    this.getAllAdmission()
    this.form = new FormGroup({
      discharged_date: new FormControl(null, [Validators.required]),
      admission_date:new FormControl(null, [Validators.required]),
      card_number: new FormControl(null, [Validators.required])
    });
  }

  showAddPatient() {
    this.close = !this.close;
  }

  onSubmit() {
    const data = {
      admission_date: this.form.value.admission_date,
      discharged_date: this.form.value.discharged_date,
      patients_id:this.form.value.card_number
    }

    console.log(data, 'admission');
    this.admissionService.addAdmission(data).subscribe((value) => {
      this.message = value.message;
      if (value) {
        this.form.reset();
      }
    });
  }
  getAllAdmission() {
   this.admissions$ =   this.admissionService.getAdmission()
  }
}
