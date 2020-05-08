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

class App extends React.Component {

  render() {
    const {
      userReducer: { showLoginDialog, showSignupDialog },
      setHideLoginDialog,
      setHideSignupDialog,
      setShowLoginDialog,
      setShowSignupDialog
    } = this.props

    return (
      <>
        <LoginDialog
          showLoginDialog={showLoginDialog}
          setHideLoginDialog={setHideLoginDialog}
          setShowSignupDialog={setShowSignupDialog}
        />
        <SignupDialog
          showSignupDialog={showSignupDialog}
          setHideSignupDialog={setHideSignupDialog}
          setShowLoginDialog={setShowLoginDialog}
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
  setShowSignupDialog: () => dispatch(setShowSignupDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
