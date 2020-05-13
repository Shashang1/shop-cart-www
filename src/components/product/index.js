import React from 'react'
import { connect } from 'react-redux'
import {
	Card,
	CardActionArea,
	CardMedia,
	CardActions,
	Button,
	Typography,
	Grid,
	Box
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import { styles } from './style.js'
import { setProducts } from '../../redux/products/actions'

class Product extends React.Component {
	componentDidMount() {
		this.props.setProducts()
	}

	render() {
		const {
			productsReducer: { currentProduct },
			classes
		} = this.props

		return (
			<>
				<Grid container direction='row' className={classes.gridContainer}>
					<Grid item xs={5}>
						<Box className={classes.stickyBox}>
							<Card className={classes.productCard}>
								<CardActionArea>
									<CardMedia
										className={classes.productCardMedia}
										image={currentProduct.imageUrl}
										title={currentProduct.name}
									/>
								</CardActionArea>
								<CardActions>
									<Button
										variant='contained'
										color='primary'
										className={classes.addToCartButton}
										size='large'
									>
										Add to cart
      				</Button>
								</CardActions>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={7} className={classes.productDetailBox}>
						<Typography variant='h3'>
							{currentProduct.name}
						</Typography>
						<Typography variant='h5'>
							Price :
							{" " + currentProduct.price} $
						</Typography>
						<Typography variant='h6'>
							Description:
						</Typography>
						<Typography variant='body1'>
							{currentProduct.description}
						</Typography>
					</Grid>
				</Grid>
			</>
		)
	}
}

const mapStateToProps = state => ({
	productsReducer: state.productsReducer
})

const mapDispatchToProps = dispatch => ({
	setProducts: () => dispatch(setProducts())
})

const ProductConnect = connect(mapStateToProps, mapDispatchToProps)(Product)
export default withStyles(styles)(ProductConnect)