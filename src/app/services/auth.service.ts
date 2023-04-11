import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData, LoginUser, RegisterUser } from '../interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}


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

  loginUser(email:string, password:string): Observable<LoginData>{
    console.log(email, password, 'data')
    return this.http.post<LoginData>("http://localhost:5000/users/signin", {email, password})

  }

  // loginUser(data:LoginUser): Observable<LoginData>{
  //   return this.http.post<LoginData>("http://localhost:5000/users/signin", data)

  // }
}
