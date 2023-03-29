import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faSignOut,
  faMoneyBill,
  faReceipt,
  faBarsProgress,
  faHome,
  faUserDoctor,
  faAdd,
  faBridgeLock
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(){}
  faUser = faUser
  logout = faSignOut
  faBill = faMoneyBill
  faReceipt = faReceipt
  pending = faBarsProgress
  user = faUser
  home= faHome
  doctor = faUserDoctor
  add = faAdd
  block = faBridgeLock

  ngOnInit(): void {

  }
}
