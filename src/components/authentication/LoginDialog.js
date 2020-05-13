import React from 'react'
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { loginValidator } from './helper'
import styles from './style'

class LoginDialog extends React.Component {
  constructor() {
    super()
    this.state = { email: '', password: '', errArray: [] }
  }

  componentWillUnmount = () => {
    this.props.setUserLoginError('')
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  onPassChange = e => {
    this.setState({ password: e.target.value })
  }

  handleLoginClick = () => {
    let errArray = loginValidator(this.state)

    if (!errArray.length) {
      this.setState({ errArray })
      this.props.getUser({
        email: this.state.email,
        password: this.state.password
      })
    }
    else {
      this.setState({ errArray })
    }
  }

  onSignupClick = () => {
    this.props.setShowLoginDialog(false)
    this.props.setShowSignupDialog(true)
  }

  render() {
    const {
      showLoginDialog,
      setShowLoginDialog,
      classes,
      loginError
    } = this.props;
    const { email, password } = this.state

    return (
      <Dialog
        open={showLoginDialog}
        onClose={() => setShowLoginDialog(false)}
        aria-labelledby="login-form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={this.onEmailChange}
            value={email}
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={this.onPassChange}
            value={password}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.authButton}
            onClick={this.handleLoginClick}
          >
            Login
          </Button>
          <List>
            {
              this.state.errArray &&
              this.state.errArray.map((value =>
                <ListItem className={classes.errMsg} key={value}>
                  {value}
                </ListItem>))
            }
            {(loginError && !this.state.errArray.length) &&
              <ListItem className={classes.errMsg} key={loginError}>
                {loginError}
              </ListItem>
            }
          </List>
          <Button
            onClick={this.onSignupClick}
            color="primary"
            className={classes.signupLink}
          >
            New to ShopCart ? Create new account.
            </Button>
        </DialogContent>
      </Dialog >
    )
  }
}

export default withStyles(styles)(LoginDialog)