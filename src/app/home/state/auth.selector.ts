import {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppState } from 'src/app/store/app.state'

const getAuthState = createFeatureSelector<AppState>('auth')


export const getAuth = createSelector(getAuthState, state => {
  return state.user
} )
