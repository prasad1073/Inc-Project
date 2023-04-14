import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Content.css';

const Content = () => {
    return (
        <section className="about-content-sec">
            <Container>
                <Row>
                    <Col md={12} lg={8} lg={{ order: 2 }} className="text-center">
                        <div className="section-title">
                            <h1>Brain tumor detector</h1>
                        </div>
                        <p className="w-50 m-auto content-inner">Through our website we help people in detecting brain tumor by analyzing the MRI image and giving result based on our detection process.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;