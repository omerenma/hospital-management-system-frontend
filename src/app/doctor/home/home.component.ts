import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(){}
  close:boolean = false
  faUser = faUser
  p: number = 1;
  collection: any[] = [1,2,3,4];
  ngOnInit(): void {

  }
  showAddPatient(){
    this.close = !this.close
  }
}
