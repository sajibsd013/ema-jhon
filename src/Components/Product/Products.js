import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    const { img, name, seller, price, stock } = props.product;

    const cursor = {
        cursor: "pointer"
    }
    return (
        <div className='product'>
            <div className="img" style={cursor} onClick={()=>props.onProductSelect(props.product)}>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'  style={cursor} onClick={()=>props.onProductSelect(props.product)}>{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button
                    className="cart-add-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} /> add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;