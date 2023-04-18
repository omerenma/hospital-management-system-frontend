import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import {ReceptionComponent} from './reception/reception.component'
import {HomeComponent as PatientHomeComponent} from './patient/home/home.component'
import { AdmissionsComponent } from './admissions/admissions.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
children:[
  {path:"", component:HomeComponent},
  {path:"users", component:UsersComponent},
  {path:"patient", component:PatientHomeComponent},
  {path:"adduser", component:AddUserComponent},
  {path:"reception", component:ReceptionComponent},
  {path:'admissions', component:AdmissionsComponent}

]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
