import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, LoginUser, RegisterUser } from '../interfaces/users';
import { AuthResponseData } from '../landing/state/models/authResponseData';
import { ResponseData } from '../landing/state/models/responseData';
import { User } from '../landing/state/models/user.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, router:Router) {}


  getDoctors(): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>('http://localhost:5000/users/getdoctors');
  }

  registerUser(user: RegisterUser): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:5000/users/register', user);
  }

  getUsers(): Observable<RegisterUser[]> {
    return this.http.get<RegisterUser[]>('http://localhost:5000/users/getusers');
  }

  deleteUser(id:number):Observable<{message:string}>{
    return this.http.delete<{message:string}>(`http://localhost:5000/users/user/${id}`)
  }

  loginUser(email:string, password:string): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>("http://localhost:5000/users/signin", {email, password})

  }
  formatLoginResponse(data:AuthResponseData){
    const user = new User(data.email, data.message, data.name, data.token, data.role)
    return user
  }

  // loginUser(data:LoginUser): Observable<LoginData>{
  //   return this.http.post<LoginData>("http://localhost:5000/users/signin", data)

  // }
}
