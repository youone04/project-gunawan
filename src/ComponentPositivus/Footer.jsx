import React from 'react'
import './assets/footer.css';
import { Col, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <Row className='mt-5'>
            <Col sm={12}>
                <Card className='card-footer-positivus'>
                    <Row className='p-5'>
                        <Col sm={12} lg={3}>
                            <img src='https://res.cloudinary.com/dazrfoep1/image/upload/v1725185709/portofolio-not-delete/jtymsfuonj9lcxs2gqlp.png' />
                        </Col>

                        <Col sm={12} lg={6}>
                            <div className='menu-footer-positivus'>
                                <p>About us</p>
                                <p>Services</p>
                                <p>Use Cases</p>
                                <p>Pricing</p>
                                <p>Blog</p>
                            </div>
                        </Col>

                        <Col sm={12} lg={3}>
                            <div className='icon-footer-positivus'>
                                <FontAwesomeIcon icon={faLinkedin} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </Col>
                    </Row>

                    <Card.Body>
                        <Row className='p-5 pt-0'>
                            <Col>
                                <h2 className='bg-text contact-us-footer-positivius' style={{ width: 200 }}>Contact Us : </h2>
                                <p className='mt-3'>
                                    Email: info@positivus.com
                                </p>
                                <p>
                                    Phone: 555-567-8901
                                </p>
                                <p>
                                    Address: 1234 Main St
                                    Moonstone City, Stardust State 12345
                                </p>
                            </Col>
                            <Col>
                                <div className='card-footer-positivius'>
                                    <div className='d-flex p-5 card-child-footer-positivius'>
                                        <input type='email' placeholder='Email' className='input-footer-positivius' />
                                        <input style={{ backgroundColor: 'var(--green-color)', color:'var(--black-color)' }} type='button' value={'Subscribe to news'} placeholder='Email' className='input-footer-positivius' />
                                    </div>

                                </div>

                            </Col>
                        </Row>
                        <Col sm={12} lg={12} className='p-5'>
                        <hr />

                        <div className='d-flex justify-content-start' style={{ gap: 20 }}>
                            <p>© 2023 Positivus. All Rights Reserved.</p>
                            <p>Privacy Policy</p>
                        </div>
                        </Col>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}