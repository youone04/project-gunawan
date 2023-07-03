import { Container, Row, Col } from "react-bootstrap"

const Jumbotron = () => {
    return (
        <>
            <div data-aos="fade" className="bg-light card-jumbotron pt-5">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <div className="card-text-jumbotron">
                                <p className="text-title">
                                    Lessons and insights
                                </p>
                                <p className="sub-title">
                                    from 8 years
                                </p>
                                <p className="desc">where to grow your busines as a photograper: site or social media</p>
                                <button className="btn btn-register">Register</button>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div className="mt-5 ml-lg-5">
                               <div style={{width:'50%', margin: 'auto'}}>
                               <img src="/images/Illustration.png" alt="ilustrasi"/>
                               </div>
                            </div>

                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}
export default Jumbotron