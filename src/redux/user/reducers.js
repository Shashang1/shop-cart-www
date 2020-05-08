import {
  SHOW_LOGIN_DIALOG,
  HIDE_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  HIDE_SIGNUP_DIALOG
} from './types'

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  showLoginDialog: false,
  showSignupDialog: false
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_DIALOG:
      return { ...state, showLoginDialog: true }
    case HIDE_LOGIN_DIALOG:
      return { ...state, showLoginDialog: false }
    case SHOW_SIGNUP_DIALOG:
      return { ...state, showSignupDialog: true }
    case HIDE_SIGNUP_DIALOG:
      return { ...state, showSignupDialog: false }
    default:
      return state
  }
}

export default userReducer