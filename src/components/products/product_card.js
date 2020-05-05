import React from 'react'
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core'


export function ProductCard(props){
  console.log(props)
    return (
        <Card className='product_card'>
        <CardActionArea>
          <CardContent>
            <Typography variant="h5" component="h2">
              Product ID:{props.data.product_id}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="h3">
              Product name:{props.data.product_name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="h2">
              Description:{props.data.product_description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}
