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

import { signupValidator } from './helper'
import styles from './style'

class SignupDialog extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      pass: '',
      confirmPass: '',
      address: '',
      phone: '',
      errArray: []
    }
  }

  componentWillUnmount = () => {
    this.props.setUserSignupError('')
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  onPassChange = e => {
    this.setState({ pass: e.target.value })
  }

  onFirstNameChange = e => {
    this.setState({ firstName: e.target.value })
  }

  onLastNameChange = e => {
    this.setState({ lastName: e.target.value })
  }

  onConfirmPassChange = e => {
    this.setState({ confirmPass: e.target.value })
  }

  onAddressChange = e => {
    this.setState({ address: e.target.value })
  }

  onPhoneChange = e => {
    this.setState({ phone: e.target.value })
  }

  handleSignupClick = () => {
    let errArray = signupValidator(this.state)

    if (!errArray.length) {
      this.setState({ errArray })
      this.props.signup({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.pass,
        address: this.state.address,
        phone: this.state.phone
      })
    }
    else {
      this.setState({ errArray })
    }
  }

  onLoginClick = () => {
    this.props.setShowSignupDialog(false)
    this.props.setShowLoginDialog(true)
  }

  render() {
    const {
      showSignupDialog,
      setShowSignupDialog,
      classes,
      signupError
    } = this.props;

    const { email,
      pass,
      confirmPass,
      firstName,
      lastName,
      address,
      phone
    } = this.state

    return (
      <Dialog
        open={showSignupDialog}
        onClose={() => setShowSignupDialog(false)}
        aria-labelledby="login-form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <TextField
            autoFocus
            margin="dense"
            id="first-name"
            label="First Name"
            type="text"
            fullWidth
            onChange={this.onFirstNameChange}
            value={firstName}
            required
          />
          <TextField
            margin="dense"
            id="last-name"
            label="Last Name"
            type="text"
            fullWidth
            onChange={this.onLastNameChange}
            value={lastName}
            required
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={this.onEmailChange}
            value={email}
            required
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            onChange={this.onPassChange}
            value={pass}
            required
          />
          <TextField
            margin="dense"
            id="con-password"
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={this.onConfirmPassChange}
            value={confirmPass}
            required
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            onChange={this.onAddressChange}
            value={address}
            required
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone Number"
            type="tel"
            fullWidth
            onChange={this.onPhoneChange}
            value={phone}
            required
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.authButton}
            onClick={this.handleSignupClick}
          >
            Signup
          </Button>
          <List>
            {
              this.state.errArray &&
              this.state.errArray.map((value =>
                <ListItem className={classes.errMsg} key={value}>
                  {value}
                </ListItem>))
            }
            {(signupError && !this.state.errArray.length) &&
              <ListItem className={classes.errMsg} key={signupError}>
                {signupError}
              </ListItem>
            }
          </List>
          <Button
            onClick={this.onLoginClick}
            color="primary"
            className={classes.loginLink}
          >
            Already have an account ? Login
          </Button>
        </DialogContent>
      </Dialog >
    )
  }
}

export default withStyles(styles)(SignupDialog)