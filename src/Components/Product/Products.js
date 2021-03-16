import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const { img, name, seller, price, stock } = props.product;

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                    className="cart-add-button"
                    onClick= {() => props.handleAddProduct(props.product)}
                    > 
                        <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;