import React from 'react'
import "@ComponentPositivus/assets/testimonials.css";
import { Col, Row } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        text: "ignificant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    {
        text: "ignificant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    {
        text: "ificant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    {
        text: "ificant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        position: "Marketing Director at XYZ Corp",
    },
    // Add more testimonials as needed
];
export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '320px',
        arrows: true,
        responsive: [
          {
            breakpoint: 1024, // Mobile breakpoint
            settings: {
              slidesToShow: 1,
              centerMode: false,
              centerPadding: '0px', // Remove padding for mobile
            }
          }
        ]
      };
    return (
        <Col className='mt-3'>
            <Row>
                <Col sm={12} lg={2} className='center-component'>
                    <h2 className='bg-text-testimonial'>Testimonials</h2>
                </Col>
                <Col sm={12} lg={10} className='center-component'>
                    <p className='desc-team'>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </Col>
            </Row>

            <div className="section-card-testimomial">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-slide mt-5">
                            <div className="testimonial-card">
                                <p className="testimonial-text">"{testimonial.text}"</p>
                            </div>
                            <div className="testimonial-author">
                                   <div>
                                   <p className="author-name">{testimonial.name}</p>
                                   <p className="author-position">{testimonial.position}</p>
                                   </div>
                                </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Col>
    )
}  