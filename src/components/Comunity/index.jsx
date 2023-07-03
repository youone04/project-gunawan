import { Container, Row, Col } from "react-bootstrap";

const Comunity = () => {
    return (
        <Container data-aos="fade">
            <div className="center-text">
                <h3 className="mt-5">
                    Manage your entire community in a single system
                </h3>
                <p className="desc-text">
                    Who is Nextcent suitable for?
                </p>
            </div>

            <div className="row mt-3">
                <div className="card-komunity col-sm-12 col-md-4 d-flex justify-content-center mt-xs-5 mt-sm-3">
                    <div className="card p-3 text-center" style={{ width: '55%' }}>
                        <img style={{ display: 'block', margin: 'auto' }} width={40} src="/images/logo/Icon.png" alt="logo" />
                        <h5>
                            Membership Organisations
                        </h5>
                        <p className="desc-text" style={{ fontSize: 10 }}>
                            Our membership management software
                            provides full automation of membership
                            renewals and payments
                        </p>
                    </div>
                </div>

                <div className=" card-komunity col-sm-12 col-md-4 d-flex justify-content-center mt-xs-5 mt-sm-3">
                    <div className="card p-3 text-center" style={{ width: '55%' }}>
                        <img style={{ display: 'block', margin: 'auto' }} width={40} src="/images/logo/Icon(3).png" alt="logo" />
                        <h5>
                            National Assosations
                        </h5>
                        <p className="desc-text" style={{ fontSize: 10 }}>
                            Our membership management software
                            provides full automation of membership
                            renewals and payments
                        </p>
                    </div>
                </div>

                <div className=" card-komunity col-sm-12 col-md-4 d-flex justify-content-center mt-xs-5 mt-sm-3">
                    <div className="card p-3 text-center" style={{ width: '55%' }}>
                        <img style={{ display: 'block', margin: 'auto' }} width={40} src="/images/logo/Icon (2).png" alt="logo" />
                        <h5>
                            Club And Groups
                        </h5>
                        <p className="desc-text" style={{ fontSize: 10 }}>
                            Our membership management software
                            provides full automation of membership
                            renewals and payments
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Comunity;