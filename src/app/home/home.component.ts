import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs'
import {Store} from '@ngrx/store'
import { AppState } from '../store/app.state';
import { getAuth } from './state/auth.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

constructor(private router: Router, private store:Store<AppState>){}
  auth$!: Observable<{}>;
ngOnInit(): void {
 this.store.select(getAuth).subscribe(data => {
  if(data.role === "admin"){
    this.router.navigate(["/admin"])
  }
  if(data.role === "doctor"){
    this.router.navigate(['/doctor'])
  }
  if(data.role === "reception"){
    this.router.navigate(["/reception"])
  }
 })
}
}
