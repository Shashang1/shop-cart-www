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
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    const phonePattern = /^[0-9]*$/
    let errArray = []
    if (this.state.firstName.length < 1) {
      errArray.push('First Name requried')
    }
    if (this.state.lastName.length < 1) {
      errArray.push('Last name requried')
    }
    if (!emailPattern.test(this.state.email)) {
      errArray.push('Email not valid.')
    }
    if (this.state.pass < 6) {
      errArray.push('Password must be of 6 characters')
    }
    if (this.state.confirmPass !== this.state.pass) {
      errArray.push('Confirm password and password must be same')
    }
    if (this.state.address.length < 1) {
      errArray.push('Address requried')
    }
    if (!phonePattern.test(this.state.phone) || this.state.phone.length < 7) {

      errArray.push('Phone number must be a number and must have 7 numbers')
    }
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
    this.props.setHideSignupDialog()
    this.props.setShowLoginDialog()
  }

  render() {
    const {
      showSignupDialog,
      setHideSignupDialog,
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
        onClose={setHideSignupDialog}
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