import React from 'react';
import { connect } from 'react-redux';
import {ProductCard} from './product_card'


class ProductsList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (<>
            {this.props.products.map((val)=><ProductCard data= {val}/>)}
        </>)
    }

}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}

export default connect(mapStateToProps)(ProductsList);
