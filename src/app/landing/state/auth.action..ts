
import {createAction, props} from '@ngrx/store'
export const LOGIN_LOADING = '[auth page] login loading'
export const LOGIN_SUCCESS = '[auth page] login success'
export const LOGIN_FAILURE = '[auth page] login failure'


export const loginLoading = createAction(
  LOGIN_LOADING,
  props<{email:string, password:string}>()
  )

  export const loginSuccess = createAction(LOGIN_SUCCESS)
