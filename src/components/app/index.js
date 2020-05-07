import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'
import Header from '../header'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    )
  }
}

export default App
