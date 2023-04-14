import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Observable } from 'rxjs';
import { Diagnosis } from 'src/app/interfaces/diagnosis';
import { RegisterUser } from 'src/app/interfaces/users';
import { AuthService } from 'src/app/services/auth.service';
import { DiagnosisService } from 'src/app/services/diagnosis.service';
import {Store} from '@ngrx/store'
import { getAuth } from 'src/app/landing/state/auth.selector';
import { Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private authService: AuthService, private diagnosis:DiagnosisService, private store:Store, private router:Router){}
  p: number = 1;
  collection: any[] = [4];
  users$!:Observable<RegisterUser[]>
  diagnosis$!:Observable<Diagnosis[]>
  diagn: Diagnosis[] = []


  ngOnInit(): void {
    this.store.select(getAuth).subscribe(data => {
      if(!data){
        this.router.navigate(["/unauthorised"])
      }
    })
    this.getAllUsers()
   this.getDiagnosis()

  }
  donutCharts = new Chart({
    chart:{
      type:'pie',
      plotShadow:false
    },
    credits:{
      enabled:false
    },
    plotOptions:{
      pie:{
        innerSize:'99%',
        borderWidth:10,
        borderColor:'',
        slicedOffset:10,
        dataLabels:{
          connectorWidth:0
        }
      }
    },
    title:{
      verticalAlign:'middle',
      floating:true,
      text:'Diagnosis'
    },
    legend:{
      enabled:false
    },
    series:[
      {
        type:'pie',
        data:[
          {name:"Sneezing", y:1,  color:'#eeeeee'},
          {name:'Coughing', y:2, color:'#392e46'},
          {name:'Vomiting', y:3, color:'#00adb5'},
          {name:'Diaphorea', y:4, color:'#eeeeee'},
          {name:'Mental Issue', y:5, color:'#506ef9'}
        ]

      }
    ]
  })

  linechart = new Chart({
    chart:{
      type:'line'
    },
    title:{
      text:"Patients"
    },
    credits:{
      enabled:false
    },
    series:[
      {
        name:'Patient Health',
        data:[10, 2, 3, 6, 9, 17, 20, 10, 5, 2, 16]
      } as any
    ]
  })
  getAllUsers(){
   this.users$ =  this.authService.getUsers()

  }
  getDiagnosis(){
   this.diagnosis.getAllDiagnosis().subscribe(data => this.diagn = data)
  }
}
