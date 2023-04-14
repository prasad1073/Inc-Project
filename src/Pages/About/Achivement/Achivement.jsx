import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Our Detection Model</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">Our Model efficiently analyses the MRI report images given as input and detects brain tumor and even tell the type of tumor after detecting it. </p>
                            <div className="more-tool">
                            <Link to="/login"><button  className="theme-btn btn-fill">Get Started</button></Link>
                            <a href="https://www.youtube.com/watch?v=5lgrlddp-98&pp=ygUVYnJhaW4gdHVtb3IgZGV0ZWN0aW9u" className="watchBtn"><button className="theme-btn btn-unfill"><FontAwesomeIcon className="play-btn" icon={faPlayCircle} /><span>Watch Video</span></button></a>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <p>Accurate Prediction</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <p>Results in less time</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <p>Simple to use</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <p>Tells type of tumor</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;