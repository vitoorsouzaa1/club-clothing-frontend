import { IUser } from '../../../types/user.types'
import { UserActionTypes } from './user.action-types'

interface ILoginUserAction {
  type: typeof UserActionTypes.LOGIN
  payload: IUser
}

export const loginUser = (payload: IUser): ILoginUserAction => ({
  type: UserActionTypes.LOGIN,
  payload
})

interface ILogoutUserAction {
  type: typeof UserActionTypes.LOGOUT
}

export const logoutUser = (): ILogoutUserAction => ({
  type: UserActionTypes.LOGOUT
})

export type UserActions = ILoginUserAction | ILogoutUserAction
