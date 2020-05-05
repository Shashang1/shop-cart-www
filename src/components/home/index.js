import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from '../dashboard'
import Products from '../products'
import Login from '../login'
import Signup from '../signup'
import Header from '../header'

class Home extends React.Component {
    render() {
        return (
            <Container maxWidth='lg' className='container'>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'>
                            <Dashboard />
                        </Route>
                        <Route exact path='/products'>
                            <Products />
                        </Route>
                        <Route exact path='/login'>
                            <Login />
                        </Route>
                        <Route exact path='/signup'>
                            <Signup />
                        </Route>
                        <Route path ='/'>
                            404 Not found.
                        </Route>
                    </Switch>
                </Router>
            </Container>
        )
    }
}

export default Home;
