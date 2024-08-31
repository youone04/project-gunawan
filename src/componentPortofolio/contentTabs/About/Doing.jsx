export default function Doing({isHide = false}) {
    return (
        <section className="service" style={isHide ? {display: 'none'}: {display: 'block'}}>

        <h3 className="service-title-mod">What i'm doing</h3>

        <ul className="service-list" style={{ padding: 0 }}>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-design.svg
              " alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>

          </li>

          {/* <li className="service-item">

            <div className="service-icon-box">
              <img src="./assets/images/icon-photo.svg" alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>

          </li> */}

        </ul>

      </section>
    )
}