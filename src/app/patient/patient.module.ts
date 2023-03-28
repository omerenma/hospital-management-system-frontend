import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    PatientComponent,
    SidebarComponent,
    HomeComponent,
    AppointmentComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    PatientRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class PatientModule { }
