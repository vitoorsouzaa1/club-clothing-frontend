import { IUser } from '../../types/user.types'

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
    case 'LOGIN_USER':
      return { ...state, currentUser: action.paylod, isAuthenticated: true }
    case 'LOGOUT_USER':
      return { ...state, currentUser: null, isAuthenticated: false }
    default:
      return {
        ...state
      }
  }
}
