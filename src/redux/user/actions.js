import {
  SHOW_LOGIN_DIALOG,
  HIDE_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  HIDE_SIGNUP_DIALOG,
  USER_LOADING,
  SET_USER,
  SET_USER_LOGIN_ERROR,
  SET_USER_SIGNUP_ERROR
} from './types'

export const setShowLoginDialog = () => ({ type: SHOW_LOGIN_DIALOG })
export const setHideLoginDialog = () => ({ type: HIDE_LOGIN_DIALOG })
export const setShowSignupDialog = () => ({ type: SHOW_SIGNUP_DIALOG })
export const setHideSignupDialog = () => ({ type: HIDE_SIGNUP_DIALOG })
export const setUserLoading = (bool) => ({ type: USER_LOADING, isLoading: bool })
export const setUser = (userData, token) => ({ type: SET_USER, userData, token })
export const setUserLoginError = (error) => ({ type: SET_USER_LOGIN_ERROR, error })
export const setUserSignupError = (error) => ({ type: SET_USER_SIGNUP_ERROR, error })