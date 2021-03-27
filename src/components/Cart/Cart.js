import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce( (total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    let shipping = 0;
    if (total > 50) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    } 
    const tax = Math.round(total / 10);
    
    return (
        <div>
            <h2 >Order Summary</h2>
            <h4>Items Order: {cart.length }</h4>
            <p>Product Pricr: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + VAT: {tax}</small></p>
            <p>Total Price: {total + shipping + tax}</p>
            <br/>
            <Link to="/review">
            <button className="product-btn">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;