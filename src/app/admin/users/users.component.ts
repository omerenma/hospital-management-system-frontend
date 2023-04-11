import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p: number = 1
  openModal:boolean = false
  close:boolean = false;
  constructor(private users:AuthService){
  }
  users$!: Observable<RegisterUser[]>
  userss!:Observable<RegisterUser[]>
  usersData!:RegisterUser[]
  ids: number | undefined
  response:string | undefined


  ngOnInit(): void {
     this.getUsers()

  }
  getUsers(){
    this.users$ = this.users.getUsers()
  }
  assignId(id:number | undefined ){
    id = this.ids
    this.users.deleteUser(id as  number).subscribe(value => {
      this.response =  value.message
    })

  }
  setOpenModal(id:number | undefined){
     this.openModal = !this.openModal
    this.ids = id
  }

}
