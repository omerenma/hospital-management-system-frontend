import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsersComponent } from './users/users.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    UsersComponent,
    AdminUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
