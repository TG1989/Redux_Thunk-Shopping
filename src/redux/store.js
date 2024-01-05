import { combineReducers, createStore, applyMiddleware } from "redux";
import productReducer from './reducers/productReduser'
import cartReducer from './reducers/cartReducer'
import { thunk } from "redux-thunk"

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
})

export default createStore(rootReducer,applyMiddleware(thunk))