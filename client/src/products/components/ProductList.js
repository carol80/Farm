import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ProductItem from './ProductItem';
import Button from '../../shared/components/FormElements/Button';

import './ProductList.css';

const ProductList = props => {
    if (props.items.length === 0) {
        return <div className="product-list center">
            <Card>
                <h2>No products found. Maybe add one?</h2>
                <Button to="/products/new">Share Product</Button>
            </Card>
        </div>
    }
    return (
        <ul className="product-list">
            {props.items.map(product => 
                <ProductItem 
                    key={product.id} 
                    id={product.id} 
                    image={product.imageUrl} 
                    title={product.title} 
                    description={product.description} 
                    quantity={product.quantity} 
                    creatorId={product.creator} 
                />
            )}
        </ul>
    )
};

export default ProductList;
