import { combineReducers } from 'redux'
import { userReducer } from './reducers/users/user.reducer'

export const rootReducer = combineReducers({
  userReducer
})
