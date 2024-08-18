import '@ComponentPositivus/assets/logo.css';
import logo from '@/ComponentPositivus/assets/logos/Company_logo.png';
import logo1 from '@/ComponentPositivus/assets/logos/Company_logo_(1).png';
import logo2 from '@/ComponentPositivus/assets/logos/Company_logo_(2).png';
import logo3 from '@/ComponentPositivus/assets/logos/Company_logo_(3).png';
import logo4 from '@/ComponentPositivus/assets/logos/Company_logo_(4).png';
import logo5 from '@/ComponentPositivus/assets/logos/Company_logo_(5).png';
import { Col, Row } from 'react-bootstrap';

const data = [
    {
        logo: logo
    },
    {
        logo: logo1
    },
    {
        logo: logo2
    },
    {
        logo: logo3
    },
    {
        logo: logo4
    },
    {
        logo: logo5
    },
]

export default function LogoList() {
    return (
        <Row className='mt-5'>
            {data.map((item, index) => (
                <Col key={index} className="d-flex justify-content-center align-items-center">
                    <img src={item.logo} alt="logo" className='logo-list' />
                </Col>
            ))}
        </Row>

    )
}
