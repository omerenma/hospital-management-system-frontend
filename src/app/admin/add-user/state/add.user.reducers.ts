import {createReducer, on} from '@ngrx/store'
import { AddUserRequestAction } from './add.user.action'
import { AddUser } from './add.user.model'


export const initialState: ReadonlyArray<AddUser> = [];

export const addUserReducer = createReducer(
  initialState,
  on(AddUserRequestAction.addUser, (state:any, {users}) => {
    return users
  })
)
