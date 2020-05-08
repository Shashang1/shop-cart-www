import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'

import AppRoutes from './AppRoutes'
import Header from '../header'
import LoginDialog from '../authentication/LoginDialog'

import { setHideLoginDialog } from '../../redux/user/actions'

class App extends React.Component {
  render() {
    const { userReducer: { showLoginDialog }, setHideLoginDialog } = this.props

    return (
      <>
        <LoginDialog
          showLoginDialog={showLoginDialog}
          setHideLoginDialog={setHideLoginDialog}
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
  setHideLoginDialog: () => dispatch(setHideLoginDialog())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
