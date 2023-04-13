import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from '@ngrx/effects'
import { loginLoading, loginSuccess } from "./auth.action.";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { SpinnerService } from "src/app/services/spinner.service";
import { Route, Router } from "@angular/router";

@Injectable()

export class AuthEffects {
  constructor(
    private actions$:Actions,
    private authService:AuthService,
    private spinnerService:SpinnerService,
    private router: Router
    ){}

  login$ = createEffect(() => {
    return this.actions$.pipe(ofType(loginLoading),
    exhaustMap((action) => {
      this.spinnerService.requestStarted()
      return this.authService.loginUser(action.email, action.password)
      .pipe(map(data => {
        this.spinnerService.requestEnded()
        const user = this.authService.formatLoginResponse(data)
        this.router.navigate(['/home'])
        return loginSuccess({user})

      }));
    }))
  })
}
