import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import serviceDetailImg from '../../../Images/service-details-promo1.png';
import serviceDetailImg2 from '../../../Images/faq.jpg';
import './Detail.css';

const Detail = () => {
    return (
        <>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">What is a Brain Tumor?</h2>
                                <p>A brain tumor is a growth of abnormal cells that have formed in the brain. Some brain tumors are malignant (cancerous), while others are not (non-malignant, non-cancerous or benign). A brain tumor can form in the brain or other parts of the central nervous system (CNS), such as the spine or cranial nerves. The brain plays a central role in the control of most bodily functions, including awareness, movements, sensations, thoughts, speech, and memory. A tumor can affect the brain’s ability to work properly and adequately perform such functions.</p>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis risus mi. Ut placerat quam lectus. Curabitur dictum velit non lacus ornare tempor. Nullam quis augue in leo aliquet malesuada sit amet eget eros. Sed laoreet posuere velit sit amet varius.</p> */}
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="healing p-5 footer-bg">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg2} alt="expertDentist" className="img-fluid pt-xs-5" />
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold text-white">What is the difference between malignant and non-malignant brain tumors?</h2>
                                <p className="text-white">Whether a tumor is malignant or not depends on how quickly the cells reproduce. If the tumor is made up of cells that multiply slowly, then it is usually non-malignant; however, if the cells multiply and spread quickly, then the tumor is malignant.</p>
                                <p className="text-white">Non-malignant (benign) brain tumors are not cancerous. These types of tumors grow relatively slowly and do not tend to spread. Even though they are not cancerous, these tumors can still cause symptoms and may need treatment. A non-malignant brain tumor can still be a serious medical condition.</p>
                                <p className="text-white">Malignant brain tumors are cancerous. These types of tumors generally grow faster, and are more aggressive than non-malignant tumors. They often spread and damage other areas of the brain and spinal cord. Malignant brain tumors need to be treated as soon as possible to prolong life.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="healing p-5">
                <Container>
                    <Row className="align-items-center p-5">
                        <Col lg={6} sm={12} xs={12}>
                            <div className="expertDentist-txt mt-5 mt-lg-0">
                                <h2 className="fw-bold">What is Tumor Grading?</h2>
                                <p>Tumor grade has long been a way to define the aggressiveness of a tumor, particularly for malignant brain tumors such as glioma but also for non-malignant (benign) brain tumors including meningioma.</p>
                                <p>Traditionally, tumors have been classified as grade 1 to 4 based on histology (cells as viewed under a microscope) and molecular markers. Grade 1 tumors occur primarily in children and represent a type separate from grade 2-4 (seen primarily in adults). Grade 2 tumors are considered low grade, but some can be aggressive. Grade 3 and 4 tumors are defined as high grade.</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} xs={12}>
                            <img src={serviceDetailImg} alt="expertDentist" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Detail;