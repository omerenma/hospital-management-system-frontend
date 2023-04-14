

import {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'

export const AUTH_STATE_NAME = 'auth'

const getAuthState = createFeatureSelector<AppState>('auth')

export const getClearAuthState = createFeatureSelector<AppState>('auth')


export const getAuth = createSelector(getAuthState, state => {
  return state.user
} )

export const clearStore = createSelector(getClearAuthState, state => {
  console.log(state, 'state')

  return state
})
