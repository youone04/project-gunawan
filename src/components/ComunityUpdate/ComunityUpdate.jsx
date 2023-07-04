import { Container, Row, Col } from "react-bootstrap"

const ComunityUpdate = () => {
    return (
        <Container data-aos="fade" className="mb-5 pb-5">
            <div className="pt-5 text-center">
                <h3>
                    Caring is the new marketing
                </h3>
               <center>
               <p className="desc-text comunity-update-desc">
                    The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.
                </p>
               </center>
            </div>
            <Row className="mt-5">
                <Col className="d-flex justify-content-center">
                    <div className="card-comunitys" id="Wrapper" style={{ backgroundImage: `url('/images/image 18.png')` }}>
                        <div id="Content">
                            Creating Streamlined Safeguarding Processes with OneRen
                            <div className="mt-3">
                            <b style={{color:'#28CB8B'}}>
                                Read More  &#10132;
                            </b>
                            </div>
                        </div>
                    </div>
                </Col >
                <Col className="d-flex justify-content-center">
                    <div className="card-comunity" id="Wrapper" style={{ backgroundImage: `url('/images/image 19.png')` }}>
                        <div id="Content">
                            What are your safeguarding responsibilities and how can you manage them?
                            <div className="mt-3">
                            <b style={{color:'#28CB8B'}}>
                                Read More  &#10132;
                            </b>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center">
                    <div className="card-comunity" id="Wrapper" style={{ backgroundImage: `url('/images/image 20.png')` }}>
                        <div id="Content">
                            Revamping the Membership Model with Triathlon Australia
                            <div className="mt-3">
                            <b style={{color:'#28CB8B'}}>
                                Read More  &#10132;
                            </b>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default ComunityUpdate