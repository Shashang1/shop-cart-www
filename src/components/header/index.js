import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<AppBar position='static' className='header'>
				<Toolbar>
					<Link to='/' className='header_link'>Home</Link>
					<Link to='/products' className='header_link'>Products</Link>
					<Link to='/login' className='header_link'>Login</Link>
					<Link to='/signup' className='header_link'>Signup</Link>
				</Toolbar>
			</AppBar>
		)
	}
}

export default Header