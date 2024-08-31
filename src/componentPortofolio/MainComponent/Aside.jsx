import {faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Aside() {
    return (
        <aside className="sidebar" data-sidebar>

            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img style={{ borderRadius: '50%' }} src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725067559/portofolio-not-delete/cnzqba9gxls7xokosbyn.jpg" alt="Richard hanrick" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Yudi Gunawan</h1>

                    <p className="title">Frontend Developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>

                    {/* <ion-icon name="chevron-down"></ion-icon> */}
                    <FontAwesomeIcon name="chevron-down" icon={faChevronDown} />
                </button>

            </div>
            <div className="sidebar-info_more-portofolio">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: 'hsl(45, 100%, 71%)'}}/>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:yudi.gunaone87@gmail.com" className="contact-link">yudi.gunaone87@gmail.com</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                        <FontAwesomeIcon icon={faPhone} style={{color: 'hsl(45, 100%, 71%)'}}/>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href="tel:+6285816790359" className="contact-link">+6285816790359</a>
                        </div>

                    </li>


                    <li className="contact-item">

                        <div className="icon-box">
                        <FontAwesomeIcon icon={faLocationPin} style={{color: 'hsl(45, 100%, 71%)'}}/>
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Jakarta, Indonesia</address>
                        </div>

                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">

                    <li className="social-item">
                        <a href="https://github.com/youone04" target='_blank' className="social-link">
                        <FontAwesomeIcon icon={faGithub} style={{color: 'white'}}/>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://www.linkedin.com/in/yudi-gunawan-b316a0170" target='_blank' className="social-link">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: 'white'}}/>
                        </a>
                    </li>

                    <li className="social-item">
                        <a href="https://www.instagram.com/yoedi_goenawan" target='_blank' className="social-link" >
                        <FontAwesomeIcon icon={faInstagram} style={{color: 'white'}}/>
                        </a>
                    </li>

                </ul>

            </div>

        </aside>
    )
}