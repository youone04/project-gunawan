import {faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Experience({isHide = false}) {
    return (
        <section className="timeline" style={isHide ? {display: 'none'}: {display: 'block'}}>

        <div className="title-wrapper">
            <div className="icon-box">
                <FontAwesomeIcon icon={faBookOpen} />
            </div>

            <h3 className="h3" style={{ color: 'white' }}>Experience</h3>
        </div>

        <ol className="timeline-list" style={{ paddingLeft: 0 }}>

            <li className="timeline-item">

                <h4 className="h4 timeline-item-title" style={{ color: 'white' }}>PT. Nutech Integrasi (Nutech)</h4>
                <span>Frontend developer (ReactJs & React Native)</span>

                <span>July 2023 — Present</span>

                <ol className="timeline-text" style={{ paddingLeft: 0 }}>
                    <li>1. Involved in building the CEISA 4.0 project as a frontend developer</li>
                    <li>2. Developed websites using libraries like ReactJS, Ant Design framework, Elastic Search, Axios, etc.</li>
                    <li>3. Created website interfaces according to client needs</li>
                    <li>4. Collaborated with backend developers to integrate APIs</li>
                    <li>5. Built websites using the microfrontend concept</li>
                    <li>6. Attended meetings with clients</li>
                    <li>7. Built Android apps with React Native and state management using Redux-Thunk</li>
                    <li>8. Building and bug fixing Android application Sitollaut</li>
                </ol>
            </li>

            <li className="timeline-item">

                <h4 className="h4 timeline-item-title" style={{ color: 'white' }}>Freelance Web Developer</h4>
                <span>Fullstack Developer (ReactJs & NodeJS)</span>
                <span>2021 — 2022</span>

                <ol className="timeline-text" style={{ paddingLeft: 0 }}>
                    <li>1. Responsible for front end and back end tasks of making websites or applications according
                        to client requests where Front End: Responsible for the 'front' of sites and applications.
                        Develop a visible part, such as a website display design. Back End: Responsible for the
                        'hidden' parts of the web and applications such as databases and infrastructure. The
                        framework and libraries used for the frontend is React js and the backend uses the express
                        js framework and the RDBMS uses postgres or mysql</li>
                    <li>2. Develop website with redux thunk and redux toolkit.</li>
                    <li>3. Develop website profesi.com</li>
                    <li>4. Develop website https://ffui.vercel.app</li>
                    <li>5. Develop webiste https://dayapadiabadi.com</li>

                </ol>

            </li>

            <li className="timeline-item">

                <h4 className="h4 timeline-item-title" style={{ color: 'white' }}>PT. Cerdaskan Generasi Bangsa (Niomic)</h4>
                <span>Frontend developer ReactJs</span>
                <span>October 2021 — December 2022</span>

                <ol className="timeline-text" style={{ paddingLeft: 0 }}>
                    <li>1. Responsible for the composition of the appearance of a website and application. Starting
                        from the content , color-type,font size, images, and buttons contained must make users feel
                        comfortable when viewing and interacting in it and converting figma designs into html and
                        css.in making the appearance of the website using the React js library and the bootsrap
                        framework.</li>
                    <li>2. Develop website with redux saga</li>
                    <li>3. Bug fixing</li>
                    <li>4. Develop web internal niomic</li>

                </ol>

            </li>

        </ol>

    </section>
    )
}