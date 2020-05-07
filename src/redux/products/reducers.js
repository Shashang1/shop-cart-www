import { SET_PRODUCTS } from './types'

const initialState = {
  products: [
    {
      productId: "1",
      productName: "cell phone",
      productDescription: "The cell phone with charger and headphones"
    },
    {
      productId: "2",
      productName: "Laptop",
      productDescription: "The Laptop with charger"
    },
    {
      productId: "3",
      productName: "Tablet",
      productDescription: "The tablet with charger"
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