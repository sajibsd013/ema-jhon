import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Products from '../Product/Products';
import Cart from '../Cart/Cart';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBackspace } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);
    const [productSelect, setProductSelect] = useState(null);
    const [modalOpen, setModalOpen] = useState(true);

    const onProductSelect = (product) => {
        setModalOpen(!modalOpen)
        setProductSelect(product)
    }

    const closeModal = ()=>{
        setModalOpen(!modalOpen)
    }
    console.log(productSelect);
    let ModalView = null;
    if (productSelect) {
        ModalView = (
            <div>
                <Modal isOpen={modalOpen} >
                    <ModalHeader className="m-auto">
                        <img src={productSelect.img} alt="" />
                    </ModalHeader>
                    <ModalBody>
                        <h4 className='product-name'>{productSelect.name}</h4>
                        <p><small>by: {productSelect.seller}</small></p>
                        <p>$ {productSelect.price}</p>
                        <p><small>only {productSelect.stock} left in stock - order soon</small></p>

                    </ModalBody>
                    <ModalFooter>
                        <button onClick={closeModal}> Close </button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    } else {
        ModalView = <div></div>
    }

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(product => <Products
                        product={product}
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        onProductSelect={onProductSelect}
                    ></Products>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

            {ModalView}

        </div>
    );
};

export default Shop;