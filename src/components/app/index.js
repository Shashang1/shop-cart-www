import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import AppRoutes from './AppRoutes'
import Header from '../header'
import LoginDialog from '../authentication/LoginDialog'
import SignupDialog from '../authentication/SignupDialog'

import {
  setHideLoginDialog,
  setHideSignupDialog,
  setShowLoginDialog,
  setShowSignupDialog
} from '../../redux/user/actions'
import { getUser, signup } from '../../redux/user/operations'

class App extends React.Component {

  render() {
    const {
      userReducer: { showLoginDialog, showSignupDialog, loginError, signupError },
      setHideLoginDialog,
      setHideSignupDialog,
      setShowLoginDialog,
      setShowSignupDialog,
      getUser,
      signup
    } = this.props

    return (
      <>
        <LoginDialog
          showLoginDialog={showLoginDialog}
          setHideLoginDialog={setHideLoginDialog}
          setShowSignupDialog={setShowSignupDialog}
          getUser={getUser}
          loginError={loginError}
        />
        <SignupDialog
          showSignupDialog={showSignupDialog}
          setHideSignupDialog={setHideSignupDialog}
          setShowLoginDialog={setShowLoginDialog}
          signup={signup}
          signupError={signupError}
        />
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  userReducer: state.userReducer
})

const mapDispatchToProps = (dispatch) => ({
  setHideLoginDialog: () => dispatch(setHideLoginDialog()),
  setHideSignupDialog: () => dispatch(setHideSignupDialog()),
  setShowLoginDialog: () => dispatch(setShowLoginDialog()),
  setShowSignupDialog: () => dispatch(setShowSignupDialog()),
  getUser: payload => dispatch(getUser(payload)),
  signup: payload => dispatch(signup(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
