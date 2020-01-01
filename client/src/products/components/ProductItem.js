import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';

import './ProductItem.css';

const ProductItem = props => {
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
                        <Button to={`/products/${props.id}`}>EDIT </Button>
                        <Button danger>DELETE</Button>
                    </div>
                </Card>
            </li>
    );
};

export default ProductItem;
