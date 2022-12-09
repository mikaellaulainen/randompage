import { LinkContainer } from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const Navi = () => {
  return (
    <Navbar bg="dark" variant='dark' expand="md">
      <LinkContainer to="/">
        <Navbar.Brand>Sivunnimi</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className='ms-3' id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navi