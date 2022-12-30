import { combineReducers } from 'redux'
import cartReducer from './toolkit/cart/cart.slice'
import userReducer from './toolkit/users/user.slice'
import categoryReducer from './toolkit/category/category.slice'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})
