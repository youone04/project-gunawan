import "@ComponentPositivus/assets/services.css";
import { Col, Row } from "react-bootstrap";
import services from "@ComponentPositivus/assets/services/search.png";
import pay from "@ComponentPositivus/assets/services/pay.png";
import socialMedia from "@ComponentPositivus/assets/services/social-media.png";
import email from "@ComponentPositivus/assets/services/email.png";
import content from "@ComponentPositivus/assets/services/content.png";
import analityc from "@ComponentPositivus/assets/services/analityc.png";
import frame19 from "@ComponentPositivus/assets/services/Frame 19.png";

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
                                    <h3 style={{ width: 200 }}>Search engine optimization</h3>
                                </Col>

                                <Col style={{ marginTop: 93 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow" style={{
                                            color: 'var(--green-color)'
                                        }}><p >&#8594;</p></span>
                                        <p>Learn more</p>
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
                                <Col>
                                    <h3 className="highlight">Pay-per-click adertising</h3>
                                </Col>
                                <Col style={{ marginTop: 93 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow" style={{
                                            color: 'var(--green-color)'
                                        }}><p >&#8594;</p></span>
                                        <p>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={pay} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col lg={6}>
                    <div className="section-card-3">
                        <Row>
                            <Col lg={6}>
                                <Col><h3>Social media marketing</h3></Col>
                                <Col style={{ marginTop: 93 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow-2" style={{
                                            color: 'var(--black-color)'
                                        }}><p >&#8594;</p></span>
                                        <p style={{ color: 'var(--white-color)' }}>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={socialMedia} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-1">
                        <Row>
                            <Col lg={6}>
                                <Col><h3>Email marketing</h3></Col>
                                <Col style={{ marginTop: 120 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow" style={{
                                            color: 'var(--green-color)'
                                        }}><p >&#8594;</p></span>
                                        <p>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={email} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-2">
                        <Row>
                            <Col lg={6}>
                                <Col><h3>Content Creation</h3></Col>
                                <Col style={{ marginTop: 120 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow" style={{
                                            color: 'var(--green-color)'
                                        }}><p >&#8594;</p></span>
                                        <p>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={content} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col lg={6}>
                    <div className="section-card-3">
                        <Row>
                            <Col lg={6}>
                                <Col><h3>Anayalic and tracking</h3></Col>
                                <Col style={{ marginTop: 93 }}>
                                    <div className="d-flex" style={{ gap: 10 }}>
                                        <span className="arrow-2" style={{
                                            color: 'var(--black-color)'
                                        }}><p >&#8594;</p></span>
                                        <p style={{ color: 'var(--white-color)' }}>Learn more</p>
                                    </div>
                                </Col>
                            </Col>
                            <Col lg={6}>
                                <img src={analityc} alt="services" width={'100%'} />
                            </Col>
                        </Row>
                    </div>

                </Col>

                <Col className="d-flex justify-content-center align-items-center" lg={12}>
                    <div className="section-card-4" >
                        <Row>
                            <Col lg={6}>
                                <h3>Let's make things happen</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
                                    esse commodi blanditiis consequuntur ea molestias? Porro magni repellat
                                    fugit perspiciatis aperiam, odit sequi veritatis, ullam minus, quibusdam sed id quis?</p>
                                <button className="btn-get">Get your free proposal</button>
                            </Col>
                            <Col lg={6} style={{position:'relative'}}>
                                <img style={{position:'absolute', top:-70}} src={frame19} alt="services" width={'85%'} />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}