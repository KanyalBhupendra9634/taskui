import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import DynamicTable from './DynamicTableComponent';
import { useState } from 'react';
import axios from 'axios'

const MyForm = ({ setDataValue }) => {
  const data = [
    { id: 1, name: 'John', description: 30 },
    { id: 2, name: 'Jane', description: 25 },
    { id: 3, name: 'Doe', description: 40 },
  ];
  const [placeName, setPlaceName] = useState('')
  const [aboutValue, setAbout] = useState('')
  const handleInputChange = (e) => {
    if (e.target.name == 'inputvalue') {
      setPlaceName(e.target.value)
    }
    else if (e.target.name == 'textareavalue') {
      setAbout(e.target.value)
    }
  }
  const handleSubmit = async (e) => {
    console.log("datavALS", placeName, aboutValue)
    e.preventDefault();
    try {
      if (placeName && aboutValue) {
        let postData = { 'name': `${placeName}`, 'description': `${aboutValue}` }
        const response = await axios.post('http://localhost:3000/createData', postData);
        console.log('Post request successful:', response.data);
        setAbout('')
        setPlaceName('')
      }
      else {
        alert('please enter the details first')
      }
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };


  return (
    <Container>
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
          <h2 className='formTitle'>ADD About Places</h2>
          <Form className='customizedForm'>
            <Form.Group controlId="place">
              <Form.Label>Place</Form.Label>
              <Form.Control value={placeName} name='inputvalue' onChange={handleInputChange} type="text" placeholder="Enter your place" />
            </Form.Group>

            <Form.Group controlId="about" style={{ marginTop: '10px' }}>
              <Form.Label>About</Form.Label>
              <Form.Control value={aboutValue} as="textarea" name='textareavalue' rows={5} style={{ resize: 'none' }} placeholder="Tell us something about this place to explore" onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="button" onClick={handleSubmit} style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={3}></Col>
      </Row>
      <Row>
        <Col md={1}></Col>
        <Col md={10} className='formTitleCol'>
          <h2 className='formTitle'>Explored Data</h2>
          <DynamicTable data={data} setDataValue={setDataValue} />
        </Col>
        <Col md={1}></Col>
      </Row>

    </Container>
  );
};

export default MyForm;
