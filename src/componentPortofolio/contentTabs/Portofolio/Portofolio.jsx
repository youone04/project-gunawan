import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Portfolio() {
    return (
        <article className="portfolio active" data-page="portfolio">

        <header>
          <h2 className="h2 article-title" style={{ color: 'white' }}>Portofolio</h2>
        </header>

        <section className="projects">

          {/* <ul className="filter-list">

            <li className="filter-item">
              <button className="active" data-filter-btn>All</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li className="filter-item">
              <button data-filter-btn>Web development</button>
            </li>

          </ul> */}

          {/* <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div> */}

          <ul className="project-list" style={{paddingLeft: 0}}>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://www.google.com/search?q=ceisa&oq=ceisa" target="_blank" style={{textDecoration: 'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725118260/portofolio-not-delete/eyu6utkmmdwl3vvlbkyg.png" alt="finance" loading="lazy" />
                </figure>

                <h3 className="project-title">Ceis 4.0</h3>

                <p className="project-category">React JS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://i.ytimg.com/vi/ycwo252o0sU/maxresdefault.jpg" alt="orizon" loading="lazy" />
                </figure>

                <h3 className="project-title">Niomic Platform</h3>

                <p className="project-category">React JS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="https://www.google.com/search?q=profesi+com&oq=profesi+com" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725119010/portofolio-not-delete/ybuag0ar1c2lncrxrlae.png" alt="fundo" loading="lazy" />
                </figure>

                <h3 className="project-title">Profesi.com</h3>

                <p className="project-category">React JS & Node JS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="https://ffui.vercel.app/" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725119187/portofolio-not-delete/mitayaiuumrsopa4ogo7.png" alt="brawlhalla" loading="lazy" />
                </figure>

                <h3 className="project-title">FFUI</h3>

                <p className="project-category">Next JS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="https://www.google.com/search?q=daya+padi+abadi&oq=daya+padi+abadi" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725120818/portofolio-not-delete/kdbemkoasuj6xtuzb60s.png" alt="dsm." loading="lazy" />
                </figure>

                <h3 className="project-title">Daya padi abadi - company profile</h3>

                <p className="project-category">Laravel</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web design">
              <a href="/positivius" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725120631/portofolio-not-delete/tty5azn0jxdlgepy0agc.png" alt="metaspark" loading="lazy" />
                </figure>

                <h3 className="project-title">Slicing Figma to HTML/CSS</h3>

                <p className="project-category">HTML/CSS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="web development">
              <a href="https://slicing-albatech.vercel.app/" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725120747/portofolio-not-delete/ksielg2bkbs3z5xvabsy.png" alt="summary" loading="lazy" />
                </figure>

                <h3 className="project-title">Slicing Figma to HTML/CSS</h3>

                <p className="project-category">HTML/CSS</p>

              </a>
            </li>

            <li className="project-item  active" data-filter-item data-category="applications">
              <a href="/nexcent" target="_blank" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="https://res.cloudinary.com/dazrfoep1/image/upload/v1725120932/portofolio-not-delete/fem3nmqrsquelsnivfi3.png" alt="task manager" loading="lazy" />
                </figure>

                <h3 className="project-title">Slicing Figma to HTML/CSS</h3>

                <p className="project-category">HTML/CSS</p>

              </a>
            </li>

            {/* <li className="project-item  active" data-filter-item data-category="web development">
              <a href="#" style={{textDecoration:'none'}}>

                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FontAwesomeIcon icon={faEye} name="" />
                  </div>

                  <img src="./assets/images/project-9.png" alt="arrival" loading="lazy" />
                </figure>

                <h3 className="project-title">Arrival</h3>

                <p className="project-category">Web development</p>

              </a>
            </li> */}

          </ul>

        </section>

      </article>
    )
}