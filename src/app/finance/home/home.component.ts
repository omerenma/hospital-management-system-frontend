import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  close:boolean = false
  p: number = 1;
  collection: any[] = [1,2,3,4];
  ngOnInit(): void {

  }
  showAddPatient(){
    this.close = !this.close
  }
}
