import { Component, OnInit, ɵisObservable } from '@angular/core';
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
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
import { AppState } from 'src/app/store/app.state';
import { clearStore, getAuth } from 'src/app/landing/state/auth.selector';
import { Router } from '@angular/router';
import { Logout } from 'src/app/landing/state/auth.action.';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private store:Store<AppState>, private router:Router){}

  auth$!:Observable<{}>
  name!:string
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
    this.store.select(getAuth).subscribe(data => {
      this.name = data.name
    })

  }
  logOut():void{
    this.store.dispatch(new Logout())
    this.router.navigate(["/"])
  }
}
