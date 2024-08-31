import iconWebDesaign from "../../assets/images/icon-design.svg";
import iconWebDevelopment from "../../assets/images/icon-dev.svg";
import iconWebMobileApp from "../../assets/images/icon-app.svg";


export default function Doing({isHide = false}) {
    return (
        <section className="service" style={isHide ? {display: 'none'}: {display: 'block'}}>

        <h3 className="service-title-mod">What i'm doing</h3>

        <ul className="service-list" style={{ padding: 0 }}>

          <li className="service-item">

            <div className="service-icon-box">
              <img src={iconWebDesaign} alt="design icon" width="40" />
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
              <img src={iconWebDevelopment} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">React Js Developer</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src={iconWebMobileApp} alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="service-item-title">React Native Developer</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>

          </li>

        </ul>

      </section>
    )
}