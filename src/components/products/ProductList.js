import React from 'react'
import { Grid } from '@material-ui/core'

import ProductCard from './ProductCard'

class ProductList extends React.Component {

 
  render() {
    return (
      <Grid container spacing={1}>
        {this.props.products.map((val) =>
          <ProductCard
            productId={val.productId}
            productName={val.productName}
            productDescription={val.productDescription}
            key={val.productId}
          />)}
      </Grid>
    )
  }
}

export default ProductList
