import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product
    const reviewItemStyle ={
        borderBottom: '1px solid gray',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '100px'
    }
    return (
        <div style={reviewItemStyle}>
            <h4 className="productTitle">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button onClick={() => props.removeProduct(key)} className="product-btn">Remove</button>
        </div>
    );
};

export default ReviewItem;