import React, { Component } from 'react'

class Product extends Component {
    constructor(props) {
        super(props);

        console.log(props.match.params.id);
    }
    render() {
        return (
            <div>Product</div>
        );
    }
}

export default Product;