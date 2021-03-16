import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);

    // const total = cart.reduce((total,product) => total+ product.price,0);

    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        total+= element.price;
    }
    let shipping = 12.99;
    if (total> 35 || total == 0) {
     shipping = 0;
    }
    else if(total>15){
     shipping = 4.99;
    }

    const tax = (total/10).toFixed(2);
    const grandPrice = (total+Number(tax)+shipping).toFixed(2);
    return (
        <div className="cart">
            <h3>Order Summery</h3>
            <h4>Items ordered: {cart.length}</h4>
            <p>Product price : ${total.toFixed(2)}</p>
            <p><small>Tax + VAT cost : ${tax}</small> </p>
            <p><small>shipping cost : ${shipping}</small> </p>
            <p>Total Price: ${grandPrice}</p>
        </div>
    );
};

export default Cart;