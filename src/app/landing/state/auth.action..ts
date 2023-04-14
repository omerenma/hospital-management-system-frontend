import { Action, createAction, props } from '@ngrx/store';
import { User } from './models/user.model';
export const LOGIN_LOADING = '[auth] login loading';
export const LOGIN_SUCCESS = '[auth] login success';
export const LOGIN_FAILURE = '[auth] login failure';
export const AUTHENTICATE_SUCCESS = 'authenticate success';
export const LOGOUT = '[LOGOUT] Logout';
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

export const logoutAction = createAction(
  'LOGOUT Logout'
)



export class Logout implements Action {
  readonly type = LOGOUT;
}




