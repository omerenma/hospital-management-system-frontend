import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(){}
  close:boolean = false
  ngOnInit(): void {
    setTimeout(() => {
      this.close = true
    }, 3000);
  }
  showLogin(){
    this.close = !this.close
  }

}

