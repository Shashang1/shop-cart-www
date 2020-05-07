import React from 'react'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions
} from '@material-ui/core'

const ProductCard = ({ product, classes }) => (
  <Card className={classes.productCard}>
    <CardActionArea>
      <CardMedia
        className={classes.productCardMedia}
        image={product.productImageUrl}
        title={product.productName}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {product.productName}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="h3">
          {product.productPrice} $
          </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        variant='contained'
        color='primary'
        className={classes.addToCartButton}
      >
        Add to cart
      </Button>
    </CardActions>
  </Card>
)

export default ProductCard