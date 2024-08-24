import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import '@ComponentPositivus/assets/team.css';
import '@ComponentPositivus/assets/index.css';
import picture1 from '@ComponentPositivus/assets/team/Picture (4).png';
import picture2 from '@ComponentPositivus/assets/team/Picture.png';
import picture3 from '@ComponentPositivus/assets/team/Picture (1).png';
import picture4 from '@ComponentPositivus/assets/team/Picture (2).png';
import picture5 from '@ComponentPositivus/assets/team/Picture (3).png';
import picture6 from '@ComponentPositivus/assets/team/Mask group.png';

const content = [
    {
        image: picture1,
        name: 'John Smith',
        position: 'CEO and Founder',
        experience: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy'
    },
    {
        image: picture2,
        name: 'Jane Doe',
        position: 'Director of Operations',
        experience: '7+ years of experience in project management and team leadership. Strong organizational and communication skills'
    },
    {
        image: picture3,
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        experience: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization'
    },
    {
        image: picture4,
        name: 'Emily Johnson',
        position: 'PPC Manager',
        experience: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis'
    },
    {
        image: picture5,
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        experience: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement'
    },
    {
        image: picture6,
        name: 'Sarah Kim',
        position: 'Content Creator',
        experience: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries'
    }
]

export default function Team() {
    return (
        <Col className='mt-5'>
            <Row>
                <Col sm={12} lg={2}>
                    <h2 className='bg-text'>Team</h2>
                </Col>

                <Col sm={12} lg={10}>
                    <p className='desc-team'>Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                </Col>
            </Row>

            <Row className='mt-2'>
                {
                    content.map((item, index) => {
                        return (
                            <Col key={index} sm={12} lg={4} className='mt-4'>
                                <Card className='p-4 box-shadow-mod card-team'>
                                    <Card.Title>
                                        <div className='d-flex justify-content-between'>
                                            <div className='d-flex' style={{ gap: 20 }}>
                                                <img src={item.image} alt="team" />
                                                <div className='mt-5'>
                                                    <h5>{item.name}</h5>
                                                    <p className='desc-text-team'>{item.position}</p>
                                                </div>
                                            </div>
                                            <span className='d-flex justify-content-center in-team'>
                                                <p className='align-items-center p-1'>In</p>
                                            </span>
                                        </div>
                                    </Card.Title>
                                    <hr />
                                    <Card.Body>
                                       {item.experience}
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
    )
}