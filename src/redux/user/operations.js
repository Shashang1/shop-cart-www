import axios from '../../config/requestConfig'
import { setUserLoading, setUser, setUserLoginError, setHideLoginDialog, setHideSignupDialog, setUserSignupError } from './actions'

export const getUser = (payload) => {
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('user/login', payload)
      .then(res => {
        dispatch(setUser(res.data.userData, res.data.token))
        dispatch(setHideLoginDialog())
        dispatch(setUserLoginError(''))
      })
      .catch((err) => { dispatch(setUserLoginError(err.response.data.error)) })
    dispatch(setUserLoading(false))
  }
}

export const signup = (payload) => {
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('user/signup', payload)
      .then(res => {
        dispatch(setUser(res.data.userData, res.data.token))
        dispatch(setHideSignupDialog())
        dispatch(setUserSignupError(''))
      })
      .catch(err => { dispatch(setUserSignupError(err.response.data.error)) })
    dispatch(setUserLoading(false))
  }
}
