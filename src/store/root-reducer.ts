import { combineReducers } from 'redux'
import { cartReducer } from './reducers/cart/cart.reducer'
import userReducer from './toolkit/users/user.slice'
import { categoryReducer } from './reducers/category/category.reducer'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer
})
