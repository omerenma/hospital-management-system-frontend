import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  constructor(){}
   close:boolean = false

  ngOnInit(): void {

  }
  showBook(){
     this.close  = !this.close
  }
}
