export const styles = theme => ({
  carouselBox: {
    width: '70%',  // eslint-disable-next-line
    ['@media (max-width:550px)']: {
      width: '100%'
    }
  },
  topContainer: {
    width: '100%',
    height: '200px',
    boxSizing: 'border-box',
    padding: theme.spacing(1)
  },
  carouselItem: {
    width: '100%'
  },
  carouselImage: {
    width: '100%',
    height: '200px'
  },
  textBox: {
    height: '200px',
    width: '30%',
    border: "1px solid black",
    padding: theme.spacing(2),
    fontSize: '1.22vw', // eslint-disable-next-line
    ['@media (max-width:950px)']: {
      fontSize: "1.4vw" 
    },// eslint-disable-next-line
    ['@media (max-width:550px)']: {
      width: '100%',
      fontSize: '3vw',
      height: '150px'
    }
  }
})