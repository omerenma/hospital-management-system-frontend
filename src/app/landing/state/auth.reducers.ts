
import { loginSuccess } from './auth.action.'
import {initialState} from './auth.state'
import {createReducer, on, } from '@ngrx/store'

const _authReducer = createReducer(initialState, on(loginSuccess, (state, action) => {
  return {
    ...state,
    user:action.user
  }
}))


export function AuthReducer(state:any, action:any){
  return _authReducer(state, action)
}
