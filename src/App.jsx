import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col,Card } from 'react-bootstrap';
import { Rnd } from 'react-rnd';
import './App.css';
import portImg from './assets/dehradunVideo.mp4';
import FormComponent from './components/FormComponent.jsx';
import { useEffect,useState } from 'react';
import axios from 'axios';

const App = () => {
  let defaultDataValue = `Explore the vibrant tapestry of Dehradun, where every moment is an adventure waiting to unfold. Nestled in the heart of the Himalayas, this charming city beckons travelers with its enchanting landscapes and cultural treasures.
                
  Immerse yourself in the tranquil beauty of Dehradun, where the gentle breeze carries the scent of pine forests and the melodious chirping of birds serenades your senses. Wander through lush green valleys, where emerald hills stretch as far as the eye can see, offering breathtaking vistas at every turn.

  Discover the rich heritage of Dehradun as you wander through its historic streets, adorned with colonial-era architecture and ancient temples. Marvel at the grandeur of the Forest Research Institute, a testament to the city's commitment to conservation and education. Explore the mystical depths of Robber's Cave, where hidden waterfalls and limestone formations await to be uncovered.

  Delve into the vibrant culture of Dehradun, where traditional music and dance resonate with the rhythm of life. Indulge your taste buds with delectable local cuisine, bursting with flavors and spices that will leave you craving for more.

  For the adventurous at heart, Dehradun offers a myriad of outdoor activities, from trekking in the Himalayas to river rafting in the gushing waters of the Ganges. Embark on a journey of self-discovery as you traverse scenic trails and conquer towering peaks, forging memories that will last a lifetime.
`
  const [data, setData] = useState(defaultDataValue);
  const setDataValue = (value)=>{
    setDataValue(value)
  }
  return (
    <>
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={6} className="p-0 h-100" style={{ overflow: 'hidden'}}>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: '50%',
              height: '100%',
            }}
            minWidth={100}
            minHeight={100}
            bounds="parent"
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }}
            disableDragging
            className="resizable-box"
          >
            <div className="content-box" style={{ backgroundColor: 'lightblue' }}>
            <video
            className="img-fluid"
            loop
            autoPlay
            muted
            controls={false}
            style={{ maxWidth: '100%', height: 'auto',borderRadius:"10px" }}
          >
            <source src={portImg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            </div>
          </Rnd>
        </Col>
        <Col md={6} className="p-0 h-100" style={{ overflow: 'hidden'}}>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: '50%',
              height: '100%',
            }}
            minWidth={100}
            minHeight={100}
            bounds="parent"
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }}
            disableDragging
            className="resizable-box"
          >
           <Card className="h-100 border-0" style={{ backgroundColor: 'lightblue' }}>
              <Card.Body className="d-flex flex-column justify-content-center bg-lightgreen text-dark">
                <Card.Title className="text-center mb-4">Explore Dehradun</Card.Title>
                <Card.Text className="text-muted">
                 
                 {data}
                    
                </Card.Text>
              </Card.Body>
            </Card>
          </Rnd>
        </Col>
      </Row>
    </Container>
    <Container fluid className="h-100">
      <Row className="h-100">
        <Col md={12} className="p-0 h-100" style={{ overflow: 'hidden'}}>
          <Rnd
            default={{
              x: 0,
              y: 0,
              width: '100%',
              height: '100%',
            }}
            minWidth={100}
            minHeight={100}
            bounds="parent"
            enableResizing={{
              top: true,
              right: true,
              bottom: true,
              left: true,
              topRight: true,
              bottomRight: true,
              bottomLeft: true,
              topLeft: true,
            }}
            disableDragging
            className="row-resizable-box"
          >
            <div className="content-box row-box" style={{ backgroundColor: 'yellow',paddingTop:"50px"}}>
              <FormComponent setDataValue={setDataValue}/>
            </div>
          </Rnd>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default App;
