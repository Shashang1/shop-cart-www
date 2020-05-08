import {
  SHOW_LOGIN_DIALOG,
  HIDE_LOGIN_DIALOG
} from './types'

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  showLoginDialog: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_DIALOG:
      return { ...state, showLoginDialog: true }
    case HIDE_LOGIN_DIALOG:
      return { ...state, showLoginDialog: false }
    default:
      return state
  }
}

export default userReducer