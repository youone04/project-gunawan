import { Card, Col, Row, InputGroup, Form, Button } from "react-bootstrap";
import "@ComponentPositivus/assets/contact-us.css";

export default function ContactUs() {
    return (
        <Col className="mt-5">
            <Row>
                <Col sm={12} lg={3} className="center-component">
                    <h3 className="bg-text-contact-us">Contact Us</h3>
                </Col>
                <Col sm={12} lg={9} className="center-component">
                    <p className="desc-contact-us">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </Col>
            </Row>
            <Card className="p-5 card-contact-us">
                <div className="d-flex" style={{ gap: 20 }}>
                    <div className="d-flex justify-content-center radio-positivus">
                        <input type="radio" className="radio-positivus-2"/>
                        <p className="mt-3">Say Hy</p>
                    </div>

                    <div className="d-flex radio-positivus">
                        <input type="radio" className="radio-positivus-2" />
                        <p className="mt-3">Get a Qoute</p>
                    </div>

                </div>

                <Card.Body>
                    <Row>
                        <Col sm={12} lg={6}>
                            <label>Name</label>
                            <InputGroup className="mb-4 mt-2">
                                <Form.Control
                                    placeholder="Name"
                                    aria-label="Name"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <label>Email*</label>
                            <InputGroup className="mb-3 mt-2">
                                <Form.Control
                                    placeholder="Email"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <label>Message*</label>
                            <InputGroup>
                                <Form.Control as="textarea" aria-label="With textarea" />
                            </InputGroup>

                            <Button className="mt-4 btn-contact-us">Send Message</Button>

                        </Col>

                        <Col sm={12} lg={6} className="image-contact-us-positivus">
                            <img className="image-contact-us" src="https://res.cloudinary.com/dazrfoep1/image/upload/v1724598716/slicing/mbaeyomhgtevk3tyyguj.png" alt="contact-us" />
                        </Col>

                    </Row>

                </Card.Body>
            </Card>
        </Col>
    )
}