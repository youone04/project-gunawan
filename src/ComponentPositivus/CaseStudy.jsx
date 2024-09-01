import React from "react";
import '@ComponentPositivus/assets/case-study.css';
import '@ComponentPositivus/assets/index.css';
import { Col, Row } from "react-bootstrap";
export default function CaseStudy() {
    return (
        <Col className="container-case-study">
            <Row className="title-case-study-positivus">
                <Col xs={12} sm={12} lg={3} className="center-component">
                    <h2 className="bg-text" style={{ width: 200 }}>Case study</h2>
                </Col>

                <Col xs={12} sm={12} lg={9} className="center-component">
                    <p className="desc-case-study">
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </p>
                </Col>
            </Row>

            <div className="isvisible-mobile">
                <div className="justify-content-center align-items-center mt-5">
                    <div className="section-card-case-study box-shadow-mod" >
                        <Row >
                            <Col className="ps-lg-4 border-right-mod" sm={12}>
                                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                                    in website traffic and a 25% increase in sales.</p>
                                <span className="button-learn d-flex">
                                    Learn more <p>&#8594;</p>
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>

                <div className="justify-content-center align-items-center mt-5">
                    <div className="section-card-case-study box-shadow-mod" >
                        <Row >
                            <Col className="ps-lg-4 border-right-mod" sm={12}>
                                <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                                    in website traffic and a 25% increase in sales.</p>
                                <span className="button-learn d-flex">
                                    Learn more <p>&#8594;</p>
                                </span>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

            <div className="justify-content-center align-items-center mt-5 isvisible-desktop">
                <div className="section-card-case-study box-shadow-mod" >
                    <Row >
                        <Col className="ps-lg-4" sm={12} lg={4} style={{ borderRight: '1px solid #F3F3F3' }}>
                            <p>For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                                in website traffic and a 25% increase in sales.</p>
                            <span className="button-learn d-flex">
                                Learn more <p>&#8594;</p>
                            </span>
                        </Col>
                        <Col className="ps-lg-4" sm={12} lg={4} style={{ borderRight: '1px solid #F3F3F3' }}>
                            <p>For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                                for key keywords and a 200% increase in organic traffic.</p>
                            <span className="button-learn d-flex">
                                Learn more <p>&#8594;</p>
                            </span>
                        </Col>
                        <Col className="ps-lg-4" sm={12} lg={4}>
                            <p>For a national retail chain, we created a social media marketing campaign that increased
                                followers by 25% and generated a 20% increase in online sales.</p>
                            <span className="button-learn d-flex">
                                Learn more <p>&#8594;</p>
                            </span>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}