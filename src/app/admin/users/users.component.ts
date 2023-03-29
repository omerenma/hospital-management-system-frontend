import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p: number = 1
  collection: any[] = [1,2]
  openModal:boolean = false
  constructor(){}
  ngOnInit(): void {

  }
  setOpenModal(){
    this.openModal = !this.openModal
  }
}
