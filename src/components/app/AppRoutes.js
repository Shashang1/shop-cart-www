import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../home'
import Product from '../product'
import Login from '../login'
import Signup from '../signup'

const AppRoutes = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route exact path='/product'>
      <Product />
    </Route>
    <Route exact path='/login'>
      <Login />
    </Route>
    <Route exact path='/signup'>
      <Signup />
    </Route>
    <Route path='/'>
      404 Not found.
    </Route>
  </Switch>
)

export default AppRoutes