import React from 'react'
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './ProductForm.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        title: 'Potato',
        description: 'Very sweet',
        imageUrl: 'data:image/jpeg;base64,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',
        quantity: '200 KG',
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Onion',
        description: 'Very cheap',
        imageUrl: 'https://static.toiimg.com/photo/72915614/o1.jpg?width=748&resize=4',
        quantity: '100 KG',
        creator: 'u2'
    }
];

const UpdateProduct = () => {
    const productId = useParams().productId;

    const identifiedProduct = DUMMY_PRODUCTS.find(p => p.id === productId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedProduct.title,
            isValid: true
        },
        description: {
            value: identifiedProduct.description,
            isValid: true
        }
    }, true);

    const productUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedProduct) {
        return (
        <div className="center">
            <h2>Could not find product</h2>
        </div>
        );
    }

    return (
        <form className="product-form" onSubmit={productUpdateSubmitHandler}>
            <Input 
                id="title" 
                element="input" 
                type="text" 
                label="Title" 
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid title."
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid}
            />
            <Input 
                id="description" 
                element="textarea" 
                label="Description" 
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid dexcription (min. 5 characters)."
                onInput={inputHandler}
                initialValue={formState.inputs.description.value}
                initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>
                UPDATE PRODUCT
            </Button>
        </form>
    )
};

export default UpdateProduct;