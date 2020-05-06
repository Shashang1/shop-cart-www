import React from 'react'
import { Container } from '@material-ui/core'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRoutes from './AppRoutes'
import Header from '../header'

class App extends React.Component {
  render() {
    return (
      <Container maxWidth='lg' className='container'>
        <Router>
          <Header />
          <AppRoutes />
        </Router>
      </Container>
    )
  }
}

export default App
