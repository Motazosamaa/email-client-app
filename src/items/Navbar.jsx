import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navb() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" >
        <Container>
          <Navbar.Brand href="#home">James Anderson</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Main</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;