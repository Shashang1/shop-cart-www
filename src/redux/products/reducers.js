import { SET_PRODUCTS } from './types'

const initialState = {
  products: [
    {
      productId: "1",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg",
      productName: "Cell phone",
      productPrice: "250"
    },
    {
      productId: "2",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg",
      productName: "Laptop",
      productPrice: "500"
    },
    {
      productId: "3",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg",
      productName: "Tablet",
      productPrice: "100"
    },
    {
      productId: "4",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(48).jpg",
      productName: "Head Phone",
      productPrice: "400"
    },
    {
      productId: "5",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(49).jpg",
      productName: "Smart Phone",
      productPrice: "210"
    },
    {
      productId: "6",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(50).jpg",
      productName: "Smart Watch",
      productPrice: "200"
    },
    {
      productId: "7",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(51).jpg",
      productName: "Smart Band",
      productPrice: "230"
    },
    {
      productId: "8",
      productImageUrl: "https://mdbootstrap.com/img/Photos/Slides/img%20(52).jpg",
      productName: "Ear Phones",
      productPrice: "270"
    }
  ]
}

function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return state;
    default:
      return state;
  }
}

export default productsReducer