import { combineReducers } from 'redux'

import productsReducer from './products/reducers'
import userReducer from './user/reducers'

const rootReducer = combineReducers({ 
  productsReducer, 
  userReducer 
})

export default rootReducer