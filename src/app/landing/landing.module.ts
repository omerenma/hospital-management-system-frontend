import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {StoreModule} from '@ngrx/store'
import { AuthReducer } from './state/auth.reducers';
import {EffectsModule} from '@ngrx/effects'
import { AuthEffects } from './state/auth.effects';
import { AUTH_STATE_NAME } from './state/auth.selector';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME, AuthReducer)

  ]
})
export class LandingModule { }
