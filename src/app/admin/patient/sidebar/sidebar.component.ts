import { Component, OnInit } from '@angular/core';
import {faBars, faHome, faSignOut, faHospital, faUserDoctor} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {

  }
  faBars = faBars
  faHome = faHome
  faLogout = faSignOut
  faHospital = faHospital
  faDoctor = faUserDoctor
}
