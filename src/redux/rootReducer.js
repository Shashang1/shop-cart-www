import { combineReducers } from 'redux'

import productsReducer from './products/reducers'
import userReducer from './login/reducers'

const rootReducer = combineReducers({ 
  products: productsReducer, 
  userData: userReducer 
})

export default rootReducer