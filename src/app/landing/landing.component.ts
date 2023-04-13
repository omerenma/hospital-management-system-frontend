import { Component, OnInit, } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner'
import {ThemePalette} from '@angular/material/core'
import { loginLoading } from './state/auth.action.';
import { getAuth } from './state/auth.selector';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  isLoading$!: Observable<boolean>
  loading$!: Observable<boolean>
  constructor(private authService: AuthService, private store:Store<{}>) {
  }
  close: boolean = false;
  form!: FormGroup;
  email!: string;
  password!: string;
  color: ThemePalette = 'primary'
  mode: ProgressSpinnerMode = 'determinate'
  value =  50


  ngOnInit(): void {

    setTimeout(() => {
      this.close = true;
    }, 3000);

    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required, Validators.email]),
    });
  }
  showLogin() {
    this.close = !this.close;
  }
  signIn() {
    this.email = this.form.value.email;
    this.password = this.form.value.password;

     const data = { email: this.email, password: this.password };
    // this.authService.loginUser(this.email, this.password).subscribe((value) => {

    // });

    this.store.dispatch(loginLoading(data))
  }
}
