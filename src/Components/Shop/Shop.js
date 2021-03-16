import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Product/Products'
import Cart from '../Cart/Cart'
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProduts] = useState(first10);
    const [cart,setCart] = useState([]);

    const handleAddProduct = (product) => {
        const newCart  = [...cart,product];
        setCart(newCart);
    }

    return (
        <div className= "shop-container">
            <div className="product-container">

                {
                    products.map(product => <Products 
                                            product = {product} 
                                            key={product.key}
                                            handleAddProduct={handleAddProduct}
                                            ></Products>)
                 }
              
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;