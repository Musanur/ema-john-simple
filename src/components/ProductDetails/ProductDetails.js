import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';                      
import   './ProductDetails.css';
const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey)

    return (
        <div className="ProductDetails">
            <h1>Product details</h1>
            <br/>
            <Product showAddTOCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetails;