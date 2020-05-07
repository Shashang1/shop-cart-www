import React from 'react'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core'

import ProductsList from './ProductList'
import { setProducts } from '../../redux/products/actions'

class Products extends React.Component {
	componentDidMount() {
    this.props.setProducts()
  }

	render() {
		const { productReducer: { products } } = this.props
		return (
			<>
				<Box color='text.secondary' p={3}>
					<h1>Wellcome!!!</h1>
					<h2>This is Products.</h2>
				</Box>
				<ProductsList products={products} />
			</>
		)
	}
}

const mapStateToProps = state => ({
  productReducer: state.productReducer
})

const mapDispatchToProps = dispatch => ({
  setProducts: () => dispatch(setProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)