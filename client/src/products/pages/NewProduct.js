import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './ProductForm.css';


const NewProduct = () => {
  const [formState, inputHandler] = useForm(
  {
    title: {
      value: '',
      isValid: false
    },
    description: {
      value: '',
      isValid: false
    },
    quantity: {
      value: '',
      isValid: false
    },
    price: {
      value: '',
      isValid: false
    }
  }, false);

const productSubmitHandler = event => {
  event.preventDefault();
  console.log(formState.inputs); // send this to backend
};

  return (
    <form className="product-form" onSubmit={productSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="quantity"
        element="input"
        label="Quantity"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter quantity."
        onInput={inputHandler}
      />
      <Input
        id="price"
        element="input"
        label="Price"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter price."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PRODUCT
      </Button>
    </form>
  );
};

export default NewProduct;
