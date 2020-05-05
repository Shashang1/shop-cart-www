import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <AppBar position='static' className='header'>
                <Toolbar>
                    <Link to='/' class='header_link'>Home</Link>
                    <Link to='/products' class='header_link'>Products</Link>
                    <Link to='/login' class='header_link'>Login</Link>
                    <Link to='/signup' class='header_link'>Signup</Link>
                </Toolbar>
            </AppBar>
        )
    }
}
export default Header;