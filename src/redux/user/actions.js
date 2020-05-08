import { 
  SHOW_LOGIN_DIALOG, 
  HIDE_LOGIN_DIALOG,
  SHOW_SIGNUP_DIALOG,
  HIDE_SIGNUP_DIALOG 
} from './types'

export const setShowLoginDialog = () => ({ type: SHOW_LOGIN_DIALOG })
export const setHideLoginDialog = () => ({ type: HIDE_LOGIN_DIALOG })
export const setShowSignupDialog = () => ({ type: SHOW_SIGNUP_DIALOG })
export const setHideSignupDialog = () => ({ type: HIDE_SIGNUP_DIALOG })