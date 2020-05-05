import React from 'react'
import {Box} from '@material-ui/core'
import ProductsList from './product_list'

class Products extends React.Component{
    render(){
        return(
            <>
            <Box color='text.secondary' p={3}>
                <h1>Wellcome!!!</h1>
                <h2>This is Products.</h2>
            </Box>
            <ProductsList/>
            </>
        )
    }
}

export default Products;