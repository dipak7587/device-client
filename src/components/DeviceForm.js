import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const DeviceForm = (props) => {
  const [device, setDevice] = useState(() => {
    return {
      deviceName: props.device ? props.device.deviceName : '',
      author: props.device ? props.device.author : '',
      quantity: props.device ? props.device.quantity : '',
      price: props.device ? props.device.price : '',
      date: props.device ? props.device.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { deviceName, author, price, quantity } = device;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [deviceName, author, price, quantity];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const device = {
        deviceName,
        author,
        price,
        quantity,
      };
      props.handleOnSubmit(device);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setDevice((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setDevice((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setDevice((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Device Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="deviceName"
            value={deviceName}
            placeholder="Enter name of device"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Device Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Device Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of device"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DeviceForm;
