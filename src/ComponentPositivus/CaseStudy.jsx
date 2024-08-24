import { Card, Col, Row, Collapse } from "react-bootstrap";
import React, { useState } from 'react'
import '@ComponentPositivus/assets/case-study.css';
import '@ComponentPositivus/assets/index.css';

const dataStatus = [];
    [1, 2, 3, 4, 5, 6].forEach((_) => {
        dataStatus.push(false)

    })
export default function CaseStudy() {
    const [open, setOpen] = useState(dataStatus);

    const handleOpen = (index) => {
        // logic yang di pakai
        // const data = ['y', 'u', 'd', 'i'];
        // console.log([...data.slice(0,0)])
        // console.log(data[0])
        // console.log([...data.slice(0+1)])
        
        
        // console.log([...data.slice(0,1)])
        // console.log(data[1])
        // console.log([...data.slice(1+1)])
        // contoh index ada di inde ke 1
        // 1. [...data.slice(0,1)] => kode tersebut berarti mengambil elemant dari index ke 0 berakhir index 1 yaitu "Y" yang diambil sebelum index 1
        // 2. data[1] =>  kode tersebut berada di index ke 1 yaitu "U", "U" di ubah menjadi true/false
        // 3. [...data.slice(1+1)] => kode tersebut berarti mengambil elemant dari index ke 2 dst berarti "D", "I"
        
        // console.log([...data.slice(0,2)])
        // console.log(data[2])
        // console.log([...data.slice(2+1)])
        
        
        // console.log([...data.slice(0,4)])
        // console.log(data[4])
        // console.log([...data.slice(4+1)])
        
        // console.log('hasil => ',[...data.slice(0,1), !data[1], ...data.slice(1+1)])

        setOpen(prev => {
            return [...prev.slice(0, index), !prev[index], ...prev.slice(index + 1)]
        })
    }
    return (
        <Col className="mt-5">
            <Row>
                <Col sm={12} lg={4}>
                    <h2 className="bg-text">Our Working Process</h2>
                </Col>
                <Col sm={12} lg={8}>
                    <p className="desc">
                        Step-by-Step Guide to Achieving Your Business Goals
                    </p>
                </Col>
            </Row>
            {
                [1, 2, 3, 4, 5, 6].map((_, i) => {
                    return (
                        <Card key={i} className={open[i] ? "card-mod mt-5" : "mt-5"} style={{ borderRadius: 25, height: 'auto' }}>
                            <Card.Body style={{ padding: 30 }}>
                                <Row>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                            <h1>01</h1>
                                            <p>Consultation</p>
                                        </div>
                                        <span onClick={() => handleOpen(i)} className="d-flex icon-plus-minus justify-content-center">
                                            <h1 className="align-items-center">{open[i] ? '-' : '+'}</h1>
                                        </span>
                                    </div>
                                </Row>
                                <Collapse in={open[i]}>
                                    <div>
                                        <hr />
                                        <p>
                                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                                            This will allow us to understand your needs and tailor our services to best fit your requirements.
                                        </p>
                                    </div>
                                </Collapse>

                            </Card.Body>
                        </Card>
                    )
                })
            }


            {/* <Card className="mt-3 card-mod-2" style={{ borderRadius: 25, height: 'auto' }}>
                <Card.Body style={{ padding: 30 }}>
                    <Row>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                <h1>02</h1>
                                <p>Research and Strategy Development</p>
                            </div>
                            <span className="d-flex icon-plus-minus justify-content-center">
                                <h1 className="align-items-center">+</h1>
                            </span>
                        </div>
                    </Row>
                    <hr />
                    <p>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                        This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </Card.Body>
            </Card>

            <Card className="mt-3 card-mod-2" style={{ borderRadius: 25, height: 'auto' }}>
                <Card.Body style={{ padding: 30 }}>
                    <Row>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                <h1>03</h1>
                                <p>Implementation</p>
                            </div>
                            <span className="d-flex icon-plus-minus justify-content-center">
                                <h1 className="align-items-center">+</h1>
                            </span>
                        </div>
                    </Row>
                    <hr />
                    <p>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                        This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </Card.Body>
            </Card>

            <Card className="mt-3 card-mod-2" style={{ borderRadius: 25, height: 'auto' }}>
                <Card.Body style={{ padding: 30 }}>
                    <Row>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                <h1>04</h1>
                                <p>Monitoring and Optimization</p>
                            </div>
                            <span className="d-flex icon-plus-minus justify-content-center">
                                <h1 className="align-items-center">+</h1>
                            </span>
                        </div>
                    </Row>
                    <hr />
                    <p>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                        This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </Card.Body>
            </Card>

            <Card className="mt-3 card-mod-2" style={{ borderRadius: 25, height: 'auto' }}>
                <Card.Body style={{ padding: 30 }}>
                    <Row>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                <h1>05</h1>
                                <p>Reporting and Communication</p>
                            </div>
                            <span className="d-flex icon-plus-minus justify-content-center">
                                <h1 className="align-items-center">+</h1>
                            </span>
                        </div>
                    </Row>
                    <hr />
                    <p>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                        This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </Card.Body>
            </Card>

            <Card className="mt-3 card-mod-2" style={{ borderRadius: 25, height: 'auto' }}>
                <Card.Body style={{ padding: 30 }}>
                    <Row>
                        <div className="d-flex justify-content-between">
                            <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                <h1>06</h1>
                                <p>Continual Improvement</p>
                            </div>
                            <span className="d-flex icon-plus-minus justify-content-center">
                                <h1 className="align-items-center">+</h1>
                            </span>
                        </div>
                    </Row>
                    <hr />
                    <p>
                        During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.
                        This will allow us to understand your needs and tailor our services to best fit your requirements.
                    </p>
                </Card.Body>
            </Card> */}
        </Col>
    )
}