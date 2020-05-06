import React from 'react'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'

import ProductCard from './ProductCard'
import { setProducts } from '../../redux/products/actions'

class ProductList extends React.Component {

  componentDidMount() {
    this.props.setProducts()
  }

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

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  setProducts: () => dispatch(setProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
