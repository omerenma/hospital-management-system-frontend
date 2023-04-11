import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HomeComponent } from './home/home.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DoctorComponent,
    TopbarComponent,
    HomeComponent,
    AppointmentComponent
  ],
  imports: [
    AgGridModule,
    CommonModule,
    DoctorRoutingModule,
    FontAwesomeModule,
    MatSlideToggleModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class DoctorModule { }
