import React from 'react'
import {Box} from '@material-ui/core'


class Dashboard extends React.Component{
    render(){
        return(
            <Box color='text.secondary' p={3}>
                <h1>Wellcome!!!</h1>
                <h2>This is Dashboard.</h2>
            </Box>
        )
    }
}

export default Dashboard;