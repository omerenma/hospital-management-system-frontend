import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    FinanceComponent,
    SidebarComponent,
    TopbarComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ]
})
export class FinanceModule { }
