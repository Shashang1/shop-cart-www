import React from 'react'
import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import Slideshow from './Slideshow'
import { styles } from './style'

class Home extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <Box className={classes.topContainer + ' clearfix'}>
        <Box className={classes.carouselBox + ' float-left'}>
          <Slideshow classes={classes} />
        </Box>
        <Box className={classes.textBox + ' float-left'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting.
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(Home)
