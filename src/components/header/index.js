import React from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import LoginDialog from '../authentication/LoginDialog'
import SignupDialog from '../authentication/SignupDialog'
import { styles } from './style'

import {
	setShowLoginDialog,
	setShowSignupDialog,
	setUserLoginError,
	setUserSignupError
} from '../../redux/user/actions'
import { getUser, signup } from '../../redux/user/operations'

class Header extends React.Component {

	render() {
		const {
			classes,
			userReducer: {
				isAuthenticated,
				currentUser,
				showLoginDialog,
				showSignupDialog,
				loginError,
				signupError
			},
			setShowLoginDialog,
			setShowSignupDialog,
			setUserLoginError,
			setUserSignupError,
			getUser,
			signup
		} = this.props

		return (
			<AppBar position='sticky' className='header'>
				{showLoginDialog &&
					<LoginDialog
						showLoginDialog={showLoginDialog}
						setShowLoginDialog={setShowLoginDialog}
						setShowSignupDialog={setShowSignupDialog}
						getUser={getUser}
						loginError={loginError}
						setUserLoginError={setUserLoginError}
					/>
				}
				{showSignupDialog &&
					<SignupDialog
						showSignupDialog={showSignupDialog}
						setShowSignupDialog={setShowSignupDialog}
						setShowLoginDialog={setShowLoginDialog}
						signup={signup}
						signupError={signupError}
						setUserSignupError={setUserSignupError}
					/>
				}
				<Toolbar>
					<div className={classes.buttonGroup}>
						{isAuthenticated ?
							(
								<>
									<Link to='/cart'>
										<IconButton aria-label='cart'>
											<ShoppingCartIcon className={classes.cartIcon} />
										</IconButton>
									</Link>
									<Link to='/user'>
										<Button className={classes.userButton}>
											{(currentUser.firstName && currentUser.firstName[0]) || 'U'}
										</Button>
									</Link>
								</>
							) : (
								<>
									<Button
										variant='contained'
										onClick={() => setShowLoginDialog(true)}
										className={classes.loginButton}
									>
										Login
									</Button>
									<Button
										variant='contained'
										onClick={() => setShowSignupDialog(true)}
										className={classes.signupButton}
									>
										Signup
									</Button>
								</>
							)}
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

const mapStateToProps = state => ({
	userReducer: state.userReducer
})

const mapDispatchToProps = {
	setShowLoginDialog,
	setShowSignupDialog,
	getUser,
	signup,
	setUserLoginError,
	setUserSignupError
}


const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header)
export default withStyles(styles)(HeaderConnect)