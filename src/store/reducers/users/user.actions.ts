import { IUser } from '../../../types/user.types'
import { UserActionTypes } from './user.action-types'

export const loginUser = (payload: IUser) => ({
  type: UserActionTypes.LOGIN,
  payload
})

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT
})
