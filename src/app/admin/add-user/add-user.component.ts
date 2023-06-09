import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private authService:AuthService) {}
  form!: FormGroup;
  role!: string;
  name!: string;
  email!: string;
  password!: string;
  responseMessage!:string;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  selectRole(event:any){
    this.role = event.target.value
  }
  onSubmit(){
    this.name = this.form.value.name;
    this.email = this.form.value.email;
    this.password = this.form.value.password;

    const data = {
      name:this.name,
      email:this.email,
      password:this.password,
      role:this.role
    }
      this.authService.registerUser(data).subscribe(value => {
        this.responseMessage = value.message
        if(value){
          this.form.reset()
        }
      })
  }


}
