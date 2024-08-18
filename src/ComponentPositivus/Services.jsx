import "@ComponentPositivus/assets/services.css";
import { Col, Row } from "react-bootstrap";
import services from "@ComponentPositivus/assets/services/search.png"
export default function Services() {
    return (
        <Col className="mt-5">
            <Row>
                <Col sm={12} lg={2}>
                    <div className="title-services">
                        <h2>Services</h2>
                    </div>
                </Col>

                <Col sm={12} lg={10}>
                    <div className="desc-services">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod dolorem, error
                            nulla consequatur veniam aliquam corporis odio nobis. Repellendus non dolore.</p>
                    </div>
                </Col>
            </Row>

            <Row className="mt-3 g-4">
                <Col lg={6}>
                    <div className="section-card-1">
                        <Row>
                            <Col lg={6}>
                                <Col>
                                    <h3 style={{width: 200}}>Search engine optimization</h3>
                                </Col>

                                <Col style={{ marginTop: 93 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span style={{
                                            width: 30,
                                            textAlign: 'center',
                                            backgroundColor: 'black', color: 
                                            'white', height: 30, borderRadius: 30}}><p style={{
                                                fontSize: 20,
                                                transform: 'rotate(-30deg)'}}>&#8594;</p></span>
                                        <p style={{height: 41, width: 'auto'}}>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={services} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-2">
                        <Row>
                            <Col lg={6}>
                                <h3 className="highlight">Pay-per-click adertising</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="section-card-3">
                        <Row>
                            <Col lg={6}>
                                <h3>Social media marketing</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-1">
                        <Row>
                            <Col lg={6}>
                                <h3>Email marketing</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-2">
                        <Row>
                            <Col lg={6}>
                                <h3>Content Creation</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-3">
                        <Row>
                            <Col lg={6}>
                                <h3>Anayalic and tracking</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={12}>
                    <div className="section-card-4">
                        <Row>
                            <Col lg={6}>
                                <h3>Search engine optimization</h3>
                            </Col>
                            <Col lg={6}>
                            </Col>
                        </Row>
                    </div>

                </Col>

            </Row>
        </Col>
    )
}