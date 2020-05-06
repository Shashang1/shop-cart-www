import React from 'react'
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { styles } from './style'

class Header extends React.Component {
	render() {
		const { classes } = this.props
		const { userData } = this.props
		return (
			<AppBar position='static' className='header'>
				<Toolbar>
					<div className={classes.buttonGroup}>
						{userData.isAuthenticated ?
							(
								<>
									<IconButton aria-label='cart' href='/cart'>
										<ShoppingCartIcon className={classes.cartIcon} />
									</IconButton>
									<Button
										href='/user'
										className={classes.userButton}
										size='large'
									>
										{userData.currentUser.firstName[0]}
									</Button>
								</>
							) : (
								<>
									<Button
										variant='contained'
										href='/login' className={classes.loginButton}
									>
										Login
									</Button>
									<Button
										variant='contained'
										href='/signup'
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
	userData: state.userData
})

const HeaderConnect = connect(mapStateToProps)(Header)
export default withStyles(styles)(HeaderConnect)