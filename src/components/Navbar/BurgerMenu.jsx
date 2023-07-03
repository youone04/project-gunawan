import { Navbar, Nav, Container } from 'react-bootstrap';

const BurgerMenu = () => {
  return (
    <Navbar className='burger-menu' expand="lg">
      <Container>
      <img src='/images/logo/Logo.png' alt="nexcent" />
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <hr/>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Comunity</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <button style={{background:'#28CB8B', color:'white'}} className='btn btn-register'>Register Now  &#10132;</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BurgerMenu;