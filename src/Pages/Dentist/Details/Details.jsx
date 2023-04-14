import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Details.css';

const Details = () => {
    return (
        <>
            <section className="dentist-details-sec">
                <Container>
                    <Row>
                        <Col md={7} lg={8}>
                            <div className="single-dentist-details">
                                <h2>General Symptoms</h2>
                            </div>
                            <div className="dentist-award">
                                  <ul>
                                    <li>Headaches, which may be severe and worsen with activity or in the early morning</li>
                                    <li>Seizures. People may experience different types of seizures like Myoclonic, Tonic-Clonic, Sensory and complex Partial</li>
                                    <li>Personality or memory changes</li>
                                    <li>Nausea or vomiting</li>
                                    <li>Fatigue and Drowsiness</li>
                                    <li>Sleep problems</li>
                                    <li>Memory problems</li>
                                    <li>Changes in ability to walk or perform daily activities</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={5} lg={4}>
                            <div className="dentist-profile text-center">
                                <div className="profile-img"></div>
                                
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pb-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="achivement-img-bg"></div>
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Specific Symptoms at the Location of Tumor</h2>
                            <ul>
                                <li >Pressure or headache near the tumor</li>
                                <li>Loss of balance and difficulty with fine motor skills is linked with a tumor in the cerebellum</li>
                                <li>Changes in judgment, including loss of initiative, sluggishness, and muscle weakness or paralysis is associated with a tumor in the frontal lobe of the cerebrum.</li>
                                <li>Partial or complete loss of vision is caused by a tumor in the occipital lobe or temporal lobe of the cerebrum.</li>
                                <li>Changes in speech, hearing, memory, or emotional state, such as aggressiveness and problems understanding or retrieving words can develop from a tumor in the frontal and temporal lobe of the cerebrum.</li>
                                <li>Difficulty swallowing, facial weakness or numbness, or double vision is a symptom of a tumor in the brain stem.</li>
                                <li>Vision changes, including loss of part of the vision or double vision can be from a tumor in the temporal lobe, occipital lobe, or brain stem</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Details;