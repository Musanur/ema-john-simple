import React, { useEffect, useState } from 'react';
import  './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        const previousCart = productKeys.map(exitingKey => {
            const product = fakeData.find(pd => pd.key === exitingKey);
            product.quantity = saveCart[exitingKey];
            return product;
        })
        setCart(previousCart);
    },[])

    const handelAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find( pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const other = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...other, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="global-container">
            <div className="product-container">
                    {
                      products.map(pd => <Product key={pd.key} handelAddProduct={handelAddProduct} product={pd} showAddTOCart={true}></Product>)
                    }
            </div>
            <div className="product-cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;