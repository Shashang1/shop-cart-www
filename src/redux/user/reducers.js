import {
  SHOW_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  USER_LOADING,
  SET_USER,
  SET_USER_LOGIN_ERROR,
  SET_USER_SIGNUP_ERROR
} from './types'

const initialState = {
  currentUser: {},
  isAuthenticated: false,
  showLoginDialog: false,
  showSignupDialog: false,
  isLoading: false,
  loginError: '',
  signupError: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_DIALOG:
      return {
        ...state,
        showLoginDialog: action.show
      }
    case SHOW_SIGNUP_DIALOG:
      return {
        ...state,
        showSignupDialog: action.show
      }
    case USER_LOADING:
      return { ...state, isLoading: action.isLoading }
    case SET_USER:
      return {
        ...state,
        currentUser: action.user.userData,
        isLoading: false,
        isAuthenticated: true,
        token: action.user.token
      }
    case SET_USER_LOGIN_ERROR:
      return { ...state, loginError: action.error }
    case SET_USER_SIGNUP_ERROR:
      return { ...state, signupError: action.error }
    default:
      return state
  }
}

export default userReducer