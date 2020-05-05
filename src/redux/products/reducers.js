import  {SET_PRODUCTS}  from './types'


const initialState = [
    {
        product_id:"1",
        product_name:"cell phone",
        product_description:"The cell phone with charger and headphones"
    },
    {
        product_id:"2",
        product_name:"Laptop",
        product_description:"The Laptop with charger"
    },
    {
        product_id:"3",
        product_name:"Tablet",
        product_description:"The tablet with charger"
    }
]
function products(state = initialState, action){
    switch (action.type){
        case SET_PRODUCTS:
            return state;
        default:
            return state;
    }
}

export default products;