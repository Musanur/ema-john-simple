import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock, key} = props.product;
    return (
        <div className="product">
            <div>
                 <img src={img} alt=""/>
            </div>
            <div className="product-name" >
                <h4 className="productTitle"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price} USD</p>
                <p><small>Only {stock} left in stock - Order soon</small></p>
               {props.showAddTOCart && <button className="product-btn" onClick={() => props.handelAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;