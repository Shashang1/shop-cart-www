import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Slideshow({ classes }) {
  const slides = [
    {
      ImageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
      title: 'First slide'
    },
    {
      ImageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg',
      title: 'Second slide'
    },
    {
      ImageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg',
      title: 'Third slide'
    }

  ]
  return (
    <Carousel interval={2000} >
      {slides.map(slide => (
        <Carousel.Item key={slide.title} className={classes.carouselItem}>
          <img
            className={classes.carouselImage}
            src={slide.ImageUrl}
            alt={slide.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
export default Slideshow