import { useState } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import About from '../contentTabs/about';
import Resume from '../contentTabs/resume';
import Portfolio from '../contentTabs/portofolio';
import Kontak from '../contentTabs/Kontak';
import Blog from '../contentTabs/Blog';


export default function Nav() {
  const [key, setKey] = useState('about');

  return (
    <div className="main-content">
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="navbar-mod-home"
    >
      <Tab eventKey="about" title="About" className="navbar-item">
        <About/>
      </Tab>
      <Tab eventKey="resume" title="Resume" className="navbar-item">
       <Resume/>
      </Tab>
      <Tab eventKey="portofolio" title="Portofolio" className="navbar-item">
       <Portfolio/>
      </Tab>
      <Tab eventKey="kontak" title="Kontak" className="navbar-item">
       <Kontak/>
      </Tab>
      <Tab eventKey="blog" title="Blog" className="navbar-item">
       <Blog/>
      </Tab>
    </Tabs>
    </div>
)
}
{/* <div className="main-content">
<Nav />
<About/>
<Resume/>
<Portfolio/>
<Blog/>
<Kontak/>
</div> */}
// <nav className="navbar-mod-home">

// <ul className="navbar-list-mod">
  
//   <li className="navbar-item">
//   <Tab eventKey="home" title="Home">
//   Tab content for Home
// </Tab>
//     <button className="navbar-link-mod  active" data-nav-link>About</button>
//   </li>

//   <li className="navbar-item">
//     <button className="navbar-link-mod" data-nav-link>Resume</button>
//   </li>

//   <li className="navbar-item">
//     <button className="navbar-link-mod" data-nav-link>Portfolio</button>
//   </li>

//   <li className="navbar-item">
//     <button className="navbar-link-mod" data-nav-link>Blog</button>
//   </li>

//   <li className="navbar-item">
//     <button className="navbar-link-mod" data-nav-link>Contact</button>
//   </li>

// </ul>

// </nav>