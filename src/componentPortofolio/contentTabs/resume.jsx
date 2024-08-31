import { faBook, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
    return (
        <article className="resume active" data-page="resume">

            <header>
                <h2 className="h2 article-title" style={{ color: 'white' }}>Resume</h2>
            </header>

            <section className="timeline">

                <div className="title-wrapper">
                    <div className="icon-box">
                        <FontAwesomeIcon icon={faBook} />
                    </div>

                    <h3 className="h3" style={{ color: 'white' }}>Education</h3>
                </div>

                <ol className="timeline-list" style={{ paddingLeft: 0 }}>

                    <li className="timeline-item">

                        <h4 className="h4 timeline-item-title" style={{ color: 'white' }}>Institut Teknologi Sumatera</h4>
                        <span>S1 Teknik Informatika</span>
                        <span>2017 — 2023</span>

                        <p className="timeline-text">
                            Cakupan bidang ilmu (body of knowledge) yang diajarkan di Program Studi Teknik Informatika meliputi ilmu pada area computer science dan software
                            engineering sehingga mahasiswa memiliki
                            kemampuan analisis persoalan yang terkait bidang computer science dan software engineering; dan juga
                            kemampuan untuk mengembangkan solusi perangkat lunak (software) baik yang kompleks  maupun dalam skala besar (large scale software).
                        </p>

                    </li>

                </ol>

            </section>

            <section className="timeline">

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
                        <span>2010 — 2013</span>

                        <ol className="timeline-text" style={{ paddingLeft: 0 }}>
                            <li>Responsible for the composition of the appearance of a website and application. Starting
                                from the content , color-type,font size, images, and buttons contained must make users feel
                                comfortable when viewing and interacting in it and converting figma designs into html and
                                css.in making the appearance of the website using the React js library and the bootsrap
                                framework.</li>
                            <li>3. Develop website with redux saga</li>
                            <li>4. Bug fixing</li>
                            <li>5. Develop web internal niomic</li>

                        </ol>

                    </li>

                </ol>

            </section>

            <section className="skill">

                <h3 className="h3 skills-title" style={{ color: 'white' }}>My skills</h3>

                <ul className="skills-list content-card">

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5" style={{ color: 'white' }}>React JS</h5>
                            <data value="80">80%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5" style={{ color: 'white' }}>Node JS</h5>
                            <data value="70">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '70%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5" style={{ color: 'white' }}>SQL</h5>
                            <data value="90">90%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '90%' }}></div>
                        </div>

                    </li>

                    <li className="skills-item">

                        <div className="title-wrapper">
                            <h5 className="h5" style={{ color: 'white' }}>Javascript</h5>
                            <data value="80">80%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: '80%' }}></div>
                        </div>

                    </li>

                </ul>

            </section>

        </article>
    )
}