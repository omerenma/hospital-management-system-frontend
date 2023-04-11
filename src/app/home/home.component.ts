// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   constructor(private authService:AuthService){}
//   close:boolean = false

//   form!:FormGroup
//   email!:string
//   password!:string

//   ngOnInit(): void {
//     setTimeout(() => {
//       this.close = true
//     }, 3000);

//     this.form = new FormGroup({
//       emaile: new FormControl(null, [Validators.required]),
//       password: new FormControl(null, [Validators.required, Validators.email])

//     })
//   }
//   showLogin(){
//     this.close = !this.close
//   }
//   signIn(){
//     this.email = this.form.value.email
//     this.password = this.form.value.password

//     const data ={
//       email:this.email,
//       password:this.password
//     }
//      this.authService.loginUser(data).subscribe(value => {
//       console.log(value)
//      })
//   }
// }

