import { Col, Container, Row } from "react-bootstrap";

const Cusotomers = () => {
    return (
        <div data-aos="fade" className="mt-5 pb-3" style={{ background: 'rgb(171 190 209 / 34%)' }}>
            <Container style={{paddingTop: 40}}>
                <Row>
                    <Col sm={12} md={3}>
                        <img className="img-customer" src="/images/image 9.png" alt="customers" />
                    </Col>
                    <Col sm={12} md={9}>
                        <p className="desc-text desc-customers" style={{fontSize: 15}}>
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h5 style={{color:'#28CB8B'}}>
                            Tim Smith
                        </h5>
                        <p className="desc-text" style={{fontSize: 15}}>
                            British Dragon Boat Racing Association
                        </p>

                        <div style={{width: '90%'}} className="d-flex justify-content-between mt-4">
                            <img width={'4%'} src="/images/logo/customers/Logo.png" alt="logo" />
                            <img width={'4%'} src="/images/logo/customers/Logo (1).png" alt="logo" />
                            <img width={'4%'} src="/images/logo/customers/Logo (2).png" alt="logo" />
                            <img width={'4%'} src="/images/logo/customers/Logo (3).png" alt="logo" />
                            <img width={'4%'} src="/images/logo/customers/Vector.png" alt="logo" />
                            <img width={'4%'} src="/images/logo/customers/Vector (1).png" alt="logo" />
                            <span style={{color:'#28CB8B'}}>Meet all customers &#10132;</span>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Cusotomers;