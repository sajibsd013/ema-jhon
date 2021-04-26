import React, { Component } from 'react';
import Products from '../Product/Products';
import Cart from '../Cart/Cart';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Shop.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        products: state.Product
    }
}

class Shop extends Component {

    state = {
        products: this.props.products.slice(0, 10),
        cart: [],
        productSelect: null,
        modalOpen: true
    }

    setModalOpen = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    render() {

        console.log("Hello Fakedata", this.props)

        const onProductSelect = (product) => {

            this.setState({
                productSelect: product,
                modalOpen: !this.state.modalOpen

            })
        }

        const closeModal = () => {
            this.setState({
                modalOpen: !this.state.modalOpen
            })
        }
        // console.log(productSelect);
        let ModalView = null;
        if (this.state.productSelect) {
            ModalView = (
                <div>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalHeader className="m-auto">
                            <img src={this.state.productSelect.img} alt="" />
                        </ModalHeader>
                        <ModalBody>
                            <h4 className='product-name'>{this.state.productSelect.name}</h4>
                            <p><small>by: {this.state.productSelect.seller}</small></p>
                            <p>$ {this.state.productSelect.price}</p>
                            <p><small>only {this.state.productSelect.stock} left in stock - order soon</small></p>

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
            const newCart = [...this.state.cart, product];
            this.setState({
                cart: newCart

            })
        }

        return (
            <div className="shop-container">
                <div className="product-container">

                    {
                        this.state.products.map(product => <Products
                            product={product}
                            key={product.key}
                            handleAddProduct={handleAddProduct}
                            onProductSelect={onProductSelect}
                        ></Products>)
                    }

                </div>

                <div className="cart-container">
                    <Cart cart={this.state.cart}></Cart>
                </div>

                {ModalView}

            </div>
        );
    }

};

export default connect(mapStateToProps)(Shop);