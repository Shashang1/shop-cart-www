import React from 'react'
import { AppBar, Toolbar, Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './style'

class Header extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<AppBar position='static' className='header'>
				<Toolbar>
					<div className={classes.buttonGroup}>
						<Button
							variant="contained"
							href="/login" className={classes.loginButton}
						>
							Login
						</Button>
						<Button
							variant="contained"
							href="/signup"
							className={classes.signupButton}
						>
							Signup
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles)(Header)