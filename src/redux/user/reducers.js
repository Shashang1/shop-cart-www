import {
  SHOW_LOGIN_DIALOG,
  HIDE_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  HIDE_SIGNUP_DIALOG,
  USER_LOADING,
  SET_USER,
  SET_USER_LOGIN_ERROR
} from './types'

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  showLoginDialog: false,
  showSignupDialog: false,
  isLoading: false
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
    case USER_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_USER:
      return { ...state, currentUser: action.userData, isLoading: false, isAuthenticated: true }
    case SET_USER_LOGIN_ERROR:
      return { ...state, loginError: action.error }
    default:
      return state
  }
}

export default userReducer