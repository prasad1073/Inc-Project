import "@fontsource/josefin-sans";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import heroTeeth from '../../../Images/1__pCEmeOrVkayCFER33o4Cw.jpg';
import './Banner.css';



const Banner = () => {
    return (
            <section className="single-hero-slide text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} sm={12} lg={6}>
                            <div className="hero-slide-left justify-content-end align-items-center text-center text-lg-start">
                                <h2>Brain Tumor Detection</h2>
                                <h1>Early Diagnosis is Key</h1>
                                <p className="mb-xs-5">Be on the safe side and get early treatment by detecting Brain Tumor using our platform in short time.</p>
                                <div className="banner-btn m-sm-auto">
                                    <Link to="/login"><button className="theme-btn btn-fill">Get Started</button></Link>
                                    <button className='theme-btn bth-blank'>Learn More</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} sm={12} lg={6} className="mt-sm-5">
                            <div className="hero-slide-right text-center text-lg-start mt-sm-5">
                                <div className="animate-img">
                                    
                                </div>
                                <img src={heroTeeth} alt="" className="heroTeeth"/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Banner;