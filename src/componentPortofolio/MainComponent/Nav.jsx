import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Portfolio from '../contentTabs/Portofolio/Portofolio';
import MainAbout from '../contentTabs/About';
import MainResume from '../contentTabs/Resume';
// import Kontak from '../contentTabs/Kontak/Kontak';
// import Blog from '../contentTabs/Blog/Blog';
export default function Nav() {
  const [key, setKey] = useState('resume');

  return (
    <div className="main-content">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="navbar-mod-home"
    >
      <Tab eventKey="about" title="About" className="navbar-item">
        <MainAbout/>
      </Tab>
      <Tab eventKey="resume" title="Resume" className="navbar-item">
       <MainResume/>
      </Tab>
      <Tab eventKey="portofolio" title="Portofolio" className="navbar-item">
       <Portfolio/>
      </Tab>
      {/* <Tab hidden eventKey="kontak" title="Kontak" className="navbar-item">
       <Kontak/>
      </Tab>
      <Tab eventKey="blog" title="Blog" className="navbar-item">
       <Blog/>
      </Tab> */}
    </Tabs>
    </div>
)
}