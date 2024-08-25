import { Card, Col, Row, Collapse } from "react-bootstrap";
import React, { useState } from 'react'
import '@ComponentPositivus/assets/on-working-process.css';
import '@ComponentPositivus/assets/index.css';

const dataStatus = [];
    [1, 2, 3, 4, 5, 6].forEach((_) => {
        dataStatus.push(false)

    })

const content = [
    {
        no: '01',
        title: 'Consultation',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        no: '02',
        title: 'Research and Strategy Development',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        no: '03',
        title: 'Implementation',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        no: '04',
        title: 'Monitoring and Optimization',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        no: '05',
        title: 'Reporting and Communication',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    },
    {
        no: '06',
        title: 'Continual Improvement',
        des: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
    }
]
export default function OnWorkingProcess() {
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
        
        
        // console.log([...data.slice(0,3)])
        // console.log(data[3])
        // console.log([...data.slice(3+1)])
        
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
                content.map((data, i) => {
                    return (
                        <Card key={i} className={open[i] ? "card-mod mt-5 box-shadow-mod" : "mt-5 box-shadow-mod"} style={{ borderRadius: 25, height: 'auto' }}>
                            <Card.Body style={{ padding: 30 }}>
                                <Row>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center" style={{ gap: 30 }}>
                                            <h1>{data.no}</h1>
                                            <p>{data.title}</p>
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
                                            {data.des}
                                        </p>
                                    </div>
                                </Collapse>

                            </Card.Body>
                        </Card>
                    )
                })
            }
        </Col>
    )

}