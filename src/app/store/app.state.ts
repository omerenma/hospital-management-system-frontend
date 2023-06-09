import { addUserReducer } from '../admin/add-user/state/add.user.reducers';
import {AuthReducer,  } from '../landing/state/auth.reducers'
import { clearStore } from '../landing/state/auth.selector';

export interface AppState {
  user:{
    message:string;
    name:string;
    role:string;
    token:string
  }
}

export const appReducer = {
  auth:AuthReducer,
  adduser:addUserReducer
}
