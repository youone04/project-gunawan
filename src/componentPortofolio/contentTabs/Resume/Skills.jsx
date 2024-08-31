export default function Skills({isHide = false}) {
    return (
        <section className="skill" style={isHide ? {display: 'none'}: {display: 'block'}}>

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
    )
}