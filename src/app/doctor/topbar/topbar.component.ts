import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
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
