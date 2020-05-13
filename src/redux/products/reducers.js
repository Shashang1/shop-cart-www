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
  ],
  currentProduct: {
    productId: '123',
    categoryId: '121',
    name: 'Cell Phone',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,' +
      'when an unknown printer took a galley of type and scrambled it to make a type' +
      'specimen book.It has survived not only five centuries, but also the leap into' +
      'electronic typesetting.',
    imageUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg',
    price: 200
  }
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