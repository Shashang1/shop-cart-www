import React from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { styles } from './style'

import { setShowLoginDialog, setShowSignupDialog } from '../../redux/user/actions'


class Header extends React.Component {

	render() {
		const {
			classes,
			userReducer: { isAuthenticated, currentUser },
			setShowLoginDialog,
			setShowSignupDialog
		} = this.props
		return (
			<AppBar position='static' className='header'>
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
											{currentUser.firstName && currentUser.firstName[0] || 'U'}
										</Button>
									</Link>
								</>
							) : (
								<>
									<Button
										variant='contained'
										onClick={setShowLoginDialog}
										className={classes.loginButton}
									>
										Login
									</Button>
									<Button
										variant='contained'
										onClick={setShowSignupDialog}
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

const mapDispatchToProps = dispatch => ({
	setShowLoginDialog: () => dispatch(setShowLoginDialog()),
	setShowSignupDialog: () => dispatch(setShowSignupDialog())
})

const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header)
export default withStyles(styles)(HeaderConnect)