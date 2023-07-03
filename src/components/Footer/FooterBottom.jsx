import { Col, Container, Row } from "react-bootstrap";

const FooterBottom = () => {
    return (
        <div data-aos="fade" style={{ backgroundColor: '#263238', color: 'white' }}>
            <Container>
                <Row className="pt-5 pb-5">
                    <Col className="d-flex justify-content-center" xs={4} sm={4} md={4} lg={4}>
                        <div>
                            <img src="/images/logo/footer/Logo.png" alt="footer" />
                            <div className="mt-5">
                                <p>
                                    Copyright © 2020 Landify UI Kit.
                                </p>
                                <p>
                                    All rights reserved
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col className="d-flex justify-content-center" xs={4} sm={4} md={2} lg={2}>
                        <div>
                            <b>Company</b>
                            <ul className="mt-5" style={{ listStyle: 'none', padding: 0, lineHeight: '180%' }}>
                                <li>About Us</li>
                                <li>Blog</li>
                                <li>Contact Us</li>
                                <li>Pricing</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                    </Col>

                    <Col className="d-flex justify-content-center" xs={4} sm={4} md={2} lg={2}>
                        <div>
                            <b>Support</b>
                            <ul className="mt-5" style={{ listStyle: 'none', padding: 0, lineHeight: '180%' }}>
                                <li>Help center</li>
                                <li>Terms of service</li>
                                <li>Legal</li>
                                <li>Privacy policy</li>
                                <li>Status</li>
                            </ul>
                        </div>
                    </Col>

                    <Col className="d-flex justify-content-center" xs={12} sm={4} md={4} lg={4}>
                        <div>
                            <b>Stay up to date</b>
                            <div className="input-container mt-5">
                                <input placeholder="Your email address" className="input-field long" type="text" />
                                <i className="material-icons icon">send</i>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default FooterBottom;