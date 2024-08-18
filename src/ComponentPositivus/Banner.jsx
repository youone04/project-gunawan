import { Col, Row } from 'react-bootstrap';
import '@/ComponentPositivus/assets/banner.css';
import ilustrastion from '@/ComponentPositivus/assets/images/Illustration.png';
export default function Banner() {
    return (
        <Row style={{ marginTop: 50 }}>
            <Col xs={12} sm={12} md={12} lg={6}>
                <div className='flex-1'>
                    <div className='desc-positivus'>
                        <h2>Navigating the digital landscape for success</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt,
                            aperiam neque commodi sint velit. Reiciendis voluptatum, nobis blanditiis
                            eius, laboriosam voluptatibus commodi, quidem neque modi obcaecati aspernatur.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt.</p>
                        <button className='btn-positivus'>Book a consultation</button>
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
                <div className='flex-1'>
                    <img src={ilustrastion} alt="ilustrastion" className='ilustration' />
                </div>
            </Col>
        </Row>
    )
}