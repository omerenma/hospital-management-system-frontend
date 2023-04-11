import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { loginLoading, loginSuccess } from "./auth.action.";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";

@Injectable()

export class AuthEffects {
  constructor(private actions$:Actions, private authService:AuthService){}

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginLoading),
    exhaustMap((action) => {
      return this.authService.loginUser(action.email, action.password)
      .pipe(map(data => {
        console.log(data, 'effect data')
        return loginSuccess();
      }));
    }))
  })
}
