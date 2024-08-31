export default function Testimonials({isHide = false}) {
    return (
        <>
            <section className="testimonials" style={isHide ? {display: 'none'}: {display: 'block'}}>

                <h3 className="h3 testimonials-title" style={{ color: 'white' }}>Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-2.png" alt="Jessica miller" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-3.png" alt="Emily evans" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Emily evans</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li className="testimonials-item">
                        <div className="content-card" data-testimonials-item>

                            <figure className="testimonials-avatar-box">
                                <img src="./assets/images/avatar-4.png" alt="Henry william" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 className="h4 testimonials-item-title" data-testimonials-title>Henry william</h4>

                            <div className="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </section>

            <div className="modal-container" data-modal-container>

                <div className="overlay" data-overlay></div>

                <section className="testimonials-modal">

                    <button className="modal-close-btn" data-modal-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                        </figure>

                        <img src="./assets/images/icon-quote.svg" alt="quote icon" />
                    </div>

                    <div className="modal-content">

                        <h4 className="h3 modal-title" data-modal-title>Daniel lewis</h4>

                        <time dateTime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p>
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience
                                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing
                                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>

                    </div>

                </section>

            </div>
        </>
    )
}