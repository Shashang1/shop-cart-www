import React from 'react'
import { Container, Box } from '@material-ui/core'

class Home extends React.Component {
    render() {
        return (
            <Container maxWidth='lg' className = 'container'>
                <Box component="span" color='text.secondary' mt={2} p={3}>
                    <h1>Welcome !!!</h1>
                    <h2>This is a Home page.</h2>
                </Box>
            </Container>
        )
    }
}

export default Home;
