import {createActionGroup, props} from '@ngrx/store'
import { AddUser } from './add.user.model'

export const AddUserAction = createActionGroup({
  source:'AddUser',
  events:{
    'AddUser':props<AddUser>(),
    'EditUser':props<{id:string}>(),
    "DeleteUser":props<{id:string}>
  }
})


export const AddUserRequestAction = createActionGroup({
  source:'AddUser API',
  events:{
    'Add User':props<{users: ReadonlyArray<AddUser>}>(),
    'Get Users':props<{users: ReadonlyArray<AddUser>}>
  }
})
