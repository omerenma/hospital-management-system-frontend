import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  constructor(){}
  close:boolean = false
  p: number = 1;
collection: any[] = [1,2,3,4];
  faUser = faUser
  ngOnInit():void{

  }
  showAddPatient(){
    this.close = !this.close
  }
}
