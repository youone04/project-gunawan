import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const  NavbarComp = () => {
    return (
        <>
            <Navbar bg="white" data-bs-theme="white" className="navbar-mod">
                <Container>
                    <Navbar.Brand className='navbar-comp' href="#home">
                        <img width={'20%'} src='/images/logo/Logo.png' alt="nexcent" />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className='m-lg-1' href="#home">Home</Nav.Link>
                        <Nav.Link className='m-lg-1' href="#features">Features</Nav.Link>
                        <Nav.Link className='m-lg-1' href="#pricing">Comunity</Nav.Link>
                        <Nav.Link className='m-lg-1' href="#pricing">Blog</Nav.Link>
                        <Nav.Link style={{ paddingRight: 20}} className='m-1' href="#pricing">Pricing</Nav.Link>
                        <button style={{background:'#28CB8B', color:'white'}} className='btn btn-register'>Register Now  <span className='arrow'>&#10132;</span></button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComp;