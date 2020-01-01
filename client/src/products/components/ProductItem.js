import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../shared/context/auth-context';

import './ProductItem.css';

const ProductItem = props => {
    const auth = useContext(AuthContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  

    const confirmDelete = () => {
        setShow(false);
        console.log("DELETING..");
    }

    return (
            <li className="product-item">
                <Card className="product-item__content">
                    <div className="product-item_image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="product-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.quantity}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="product-item__actions">
                        <Button inverse>VIEW </Button>

                        {auth.isLoggedIn && (
                        <Button to={`/products/${props.id}`}>EDIT </Button>
                        )}

                        {auth.isLoggedIn && (
                        <Button danger onClick={handleShow}>DELETE</Button>
                        )}
                        
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                            <Modal.Footer>
                            <Button inverse onClick={handleClose}>
                                CANCEL
                            </Button>
                            <Button danger onClick={confirmDelete}>
                                DELETE
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </Card>
            </li>
    );
};

export default ProductItem;
