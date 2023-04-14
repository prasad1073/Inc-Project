import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/ML model.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDentist" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Working of our Detection Model</h2>
                            <p>Our machine learning detection model is made using TensorFlow.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;