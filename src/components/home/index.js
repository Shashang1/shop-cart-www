import React from 'react'
import { Box } from '@material-ui/core'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

import Slideshow from './Slideshow'
import { styles } from './style'
import ProductCard from './ProductCard'

class Home extends React.Component {

  render() {
    const { classes, products } = this.props
    return (
      <>
        <Box className={classes.topContainer + ' clearfix'}>
          <Box className={classes.carouselBox + ' float-left'}>
            <Slideshow classes={classes} />
          </Box>
          <Box className={classes.textBox + ' float-left clearfix'}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting.
          </Box>
        </Box>
        <Box className={classes.productCardContainer} >
          {products.map(product =>
            <ProductCard
              classes={classes}
              product={product}
              key={product.productId}
            />
          )}
        </Box>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.productsReducer.products
})

const HomeConnect = connect(mapStateToProps)(Home)

export default withStyles(styles)(HomeConnect)
