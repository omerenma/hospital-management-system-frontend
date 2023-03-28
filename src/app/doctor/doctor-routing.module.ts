import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorComponent } from './doctor.component';

const routes: Routes = [
  {
    path: '', component: DoctorComponent,
  children:[
     {path:"", component:HomeComponent},
    {path:'appointment', component:AppointmentComponent}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
