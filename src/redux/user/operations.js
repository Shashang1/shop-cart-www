import axios from '../../config/requestConfig'
import {
  setUserLoading,
  setUser,
  setUserLoginError,
  setUserSignupError,
  setShowLoginDialog,
  setShowSignupDialog
} from './actions'

export const getUser = (payload) => {
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('user/login', payload)
      .then(res => {
        dispatch(setUser(res.data))
        dispatch(setShowLoginDialog(false))
      })
      .catch((err) => {
        if (err.response) dispatch(setUserLoginError(err.response.data.error))
        else dispatch(setUserLoginError('Something went worng'))
      })
    dispatch(setUserLoading(false))
  }
}

export const signup = (payload) => {
  return dispatch => {
    dispatch(setUserLoading(true))
    axios.post('user/signup', payload)
      .then(res => {
        dispatch(setUser(res.data))
        dispatch(setShowSignupDialog(false))
      })
      .catch(err => {
        if (err.response) dispatch(setUserSignupError(err.response.data.error))
        else dispatch(setUserSignupError('Something went worng'))
      })
    dispatch(setUserLoading(false))
  }
}
