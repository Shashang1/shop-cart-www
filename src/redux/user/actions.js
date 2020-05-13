import {
  SHOW_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  USER_LOADING,
  SET_USER,
  SET_USER_LOGIN_ERROR,
  SET_USER_SIGNUP_ERROR
} from './types'

export const setShowLoginDialog = (show) => ({
  type: SHOW_LOGIN_DIALOG,
  show
})

export const setShowSignupDialog = (show) => ({
  type: SHOW_SIGNUP_DIALOG,
  show
})

export const setUserLoading = (isLoading) => ({
  type: USER_LOADING, isLoading
})

export const setUser = (user) => ({
  type: SET_USER,
  user
})

export const setUserLoginError = (error) => ({
  type: SET_USER_LOGIN_ERROR, error
})

export const setUserSignupError = (error) => ({
  type: SET_USER_SIGNUP_ERROR, error
})