import { IUser } from '../../../types/user.types'
import { UserActionTypes } from './user.action-types'

interface IInitialState {
  currentUser: IUser | null
  isAuthenticated: boolean
}

export const initialState: IInitialState = {
  currentUser: null,
  isAuthenticated: false
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
      return { ...state, currentUser: action.paylod, isAuthenticated: true }
    case UserActionTypes.LOGOUT:
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return {
        ...state
      }
  }
}
