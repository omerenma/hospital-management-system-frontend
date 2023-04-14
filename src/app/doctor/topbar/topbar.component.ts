import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {Store} from '@ngrx/store'
import { getAuth } from 'src/app/home/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  constructor(private store:Store<AppState>){}
  name!:string
  close:boolean = false
  faUser = faUser
  p: number = 1;
  collection: any[] = [1,2,3,4];
  ngOnInit(): void {
    this.store.select(getAuth).subscribe(data => {
      this.name = data.name
    })
  }
  showAddPatient(){
    this.close = !this.close
  }
}
