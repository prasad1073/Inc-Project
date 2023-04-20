import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donto from '../../../Images/brain-tumor_thumb-1-732x549.webp';
import './About.css';

const About = () => {

    useEffect(() => {
        AOS.init({
                duration: 2000,
            });
        AOS.refresh();
      }, []);
    return (
        <section className="about-wrapper">
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div className="about-left">
                            <img src={donto} alt="donto" className="img-fluid donto" />
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="about-right mt-5 mt-lg-0">
                            <div className="about-content text-start" data-aos="zoom-in">
                                <h1>Welcome to a Family</h1>
                                <p>We are determined to help people to easily detect brain tumor and get early treatment</p>
                                <a href='/about'>About Us</a>
                            </div>
                            <div className="fun-fact-sec" data-aos="fade-right">
                                <div className="single-fun">
                                    <p>Simple Interface</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-right">
                                    <p>Best Detection Model</p>
                                </div>
                                <div className="single-fun" data-aos="fade-left">
                                    <p>Accurate Results</p>
                                </div>
                                <div className="single-fun sp-fun" data-aos="fade-left">
                                    <p>Completely Free</p>
                                </div>
                                <span className="line"></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;