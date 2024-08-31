import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Education({ isHide = false }) {
    return (
        <section className="timeline" style={{ display: isHide ? 'none' : 'block' }}>

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
                    <span>January 2017 — July 2023</span>

                    <p className="timeline-text">
                        Cakupan bidang ilmu (body of knowledge) yang diajarkan di Program Studi Teknik Informatika meliputi ilmu pada area computer science dan software
                        engineering sehingga mahasiswa memiliki
                        kemampuan analisis persoalan yang terkait bidang computer science dan software engineering; dan juga
                        kemampuan untuk mengembangkan solusi perangkat lunak (software) baik yang kompleks  maupun dalam skala besar (large scale software).
                    </p>

                </li>

                <li className="timeline-item">

                    <h4 className="h4 timeline-item-title" style={{ color: 'white' }}>SMA N 1 Talangpadang</h4>
                    <span>MIPA</span>
                    <span>2014 — 2017</span>

                    <p className="timeline-text">
                    Cakupan bidang ilmu tentang alam mulai dari cara kerja alam, lingkungan dan ekosistemnya, 
                    hukum yang berlaku di dalamnya, serta segala makhluk hidup yang tinggal dan hidup 
                    di dalamnya termasuk kita manusia, serta masih banyak yang lainnya. Oh iya sekedar tambahan, 
                    selain berisi mapel Ilmu Alam jurusan ini juga punya mapel matematikanya sendiri. 

                    </p>

                </li>

            </ol>

        </section>
    )
}