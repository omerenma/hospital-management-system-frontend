import {AuthReducer} from '../landing/state/auth.reducers'

export interface AppState {
  user:{
    message:string;
    name:string;
    role:string;
    token:string
  }
}

export const appReducer = {
  auth:AuthReducer
}
