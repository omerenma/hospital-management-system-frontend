
import { AppState } from 'src/app/store/app.state'
import { loginSuccess, LOGOUT } from './auth.action.'
import {initialState} from './auth.state'
import {createReducer, on, ActionReducer, Action} from '@ngrx/store'
import { clearStore, getClearAuthState } from './auth.selector'

const _authReducer = createReducer(initialState, on(loginSuccess, (state, action) => {
  return {
    ...state,
    user:action.user
  }
}))

export function AuthReducer(state:any, action:any){
  return _authReducer(state, action)
}


export function clearState(reducer:any){
  return function (state:any, action:Action){
    if(action.type === LOGOUT){
    return  clearStore
    }

    return reducer(state, action)
  }
}
