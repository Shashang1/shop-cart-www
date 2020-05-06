import React from 'react'
import { Card, CardActionArea, CardContent, Typography, Grid } from '@material-ui/core'

const ProductCard = ({ productId, productName, productDescription }) => {
  return (
    <Grid item xs={12}>
      <Card className='product_card'>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              Product ID:{productId}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
              Product name:{productName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              Description:{productDescription}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductCard