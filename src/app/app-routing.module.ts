import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  { path: 'patient', loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule) },
  { path: 'reception', loadChildren: () => import('./reception/reception.module').then(m => m.ReceptionModule) },
  { path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule) },
  { path: 'finance', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
