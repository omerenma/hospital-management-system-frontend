import { Action, createAction, props } from '@ngrx/store';
import { User } from './models/user.model';
export const LOGIN_LOADING = '[auth] login loading';
export const LOGIN_SUCCESS = '[auth] login success';
export const LOGIN_FAILURE = '[auth] login failure';
export const AUTHENTICATE_SUCCESS = 'authenticate success';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_START = '[Auth] Signup Start';
export const AUTO_LOGIN = '[Auth] Auto Login';

export const loginLoading = createAction(
  LOGIN_LOADING,
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS,
  props<{ user: User }>()
);

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(public message:string, public email: string, public name: string, public token: string) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AuthenticateStart implements Action {
  readonly type = LOGIN_LOADING;
  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  | AuthenticateSuccess
  | Logout
  | AuthenticateStart
  | LoginFail
  | AutoLogin
  | SignupStart;
