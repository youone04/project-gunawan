import { Col, Row } from 'react-bootstrap';
import '@/ComponentPositivus/assets/banner.css';
import ilustrastion from '@/ComponentPositivus/assets/images/Illustration.png';
export default function Banner() {
    return (
        <Row style={{ marginTop: 50 }}>
            <Col xs={{span: 12, order: 2}} sm={{span:12, order: 2}} md={{span:12, order: 2}} lg={{span: 6, order:1}}>
                <div className='desc-positivus'>
                    <h1>Navigating the digital landscape for success</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed natus iusto nesciunt,
                        aperiam neque commodi sint velit. Reiciendis voluptatum, nobis blanditiis
                        eius, laboriosam voluptatibus commodi, quidem neque modi obcaecati aspernatur.
                        laboriosam voluptatibus commodi, quidem neque modi obcaecati aspernatur.</p>
                    <button className='btn-positivus'>Book a consultation</button>
                </div>
            </Col>
            <Col xs={{span: 12, order: 1}} sm={{span:12, order: 1}} md={{span:12,order: 1}} lg={{span: 6,order: 2}}>
                <img src={ilustrastion} alt="ilustrastion" className='ilustration' />
            </Col>
        </Row>
    )
}