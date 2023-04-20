import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row className="text-white">
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Info</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">About</NavLink>
                                <NavLink className="footer-link">Contact Us</NavLink>
                                <NavLink className="footer-link">Our Team</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Explore</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Our Model</NavLink>
                                <NavLink className="footer-link">Features of our model</NavLink>
                                <NavLink className="footer-link">FAQ</NavLink>
                                <NavLink className="footer-link">Symptoms</NavLink>
                                <NavLink className="footer-link">Blog</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Services</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Tumor Detection</NavLink>
                                <NavLink className="footer-link">Account Login</NavLink>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className="single-footer-widget">
                            <div className="widget-title">
                                <h2>Our Address</h2>
                            </div>
                            <div className="widget-content">
                                <NavLink className="footer-link">Pune Institute of Coputer Technology</NavLink>
                                <NavLink className="footer-link">Dhankawadi, Pune.</NavLink>
                                <NavLink className="footer-link">Phone:+1 3500 5867 340</NavLink>
                                <NavLink className="footer-link">Email:yourdomain@gmail.com</NavLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-copy-right text-center text-white">
                <p className='mb-0'>&copy; 2023 - <span className="developer">Brain Tumor Detector</span> | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;