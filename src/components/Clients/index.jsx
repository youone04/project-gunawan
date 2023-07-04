import { Container, Row, Col } from "react-bootstrap";

const Clienst = () => {
    return (
        <Container data-aos="fade">
            <div className="center-text">
                <h3 className="mt-5">Our Clients</h3>
                <p className="desc-text">We have been working with some Fortune 500+ Clients</p>
            </div>

            <div className="row mt-5">
                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                   <img className="card-clients" width={'25%'} src="/images/logo/Logo (1).png" alt="logo" />
                </div>

                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                <img className="card-clients" width={'25%'} src="/images/logo/Logo (2).png" alt="logo" />
                </div>

                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                <img className="card-clients" width={'25%'} src="/images/logo/Logo (3).png" alt="logo" />
                </div>

                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                <img className="card-clients" width={'25%'} src="/images/logo/Logo (4).png" alt="logo" />
                </div>

                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                <img className="card-clients" width={'25%'} src="/images/logo/Logo (5).png" alt="logo" />
                </div>

                <div className="col-sm-12 col-md-2 d-flex justify-content-center">
                <img className="card-clients" width={'25%'} src="/images/logo/Logo (6).png" alt="logo" />
                </div>
            </div>
        </Container>
    )
}

export default Clienst;