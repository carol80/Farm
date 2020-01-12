import React, { useState } from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_NUMBER
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { Row, Col } from 'react-bootstrap';

import './ProductForm.css';

const NewProduct = () => {
  const [unit, setUnit] = useState('Kilograms');

  function handleChange(e){
    setUnit(e.target.value);
  };

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
    console.log(formState.inputs);
    console.log(unit); // send this to backend
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
      <Row>
        <Col>
          <Input
            type="number"
            id="quantity" 
            element="input"
            label="Quantity"
            validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()]}
            errorText="Please enter valid quantity."
            onInput={inputHandler}
          />
        </Col>
        <Col>
          <div className="form-control">
            <label htmlFor="unit">Unit</label>
            <select 
              className="form-control" 
              onChange={handleChange} 
              value={unit}
              style={{ 
                marginTop: "0px", 
                paddingTop: "0px",
                paddingLeft: "0px",
                backgroundColor: "#f8f8f8" 
                }}>
                <option value="Kilograms">Kilograms</option>
                <option value="Litres">Litres</option>
                <option value="Dozen">Dozen</option>
            </select>
          </div>
        </Col>
      </Row>
      
      <Input
        type="number"
        id="price"
        element="input"
        label="Price in &#x20b9;"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_NUMBER()]}
        errorText="Please enter valid price."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PRODUCT
      </Button>
    </form>
  );
};

export default NewProduct;
