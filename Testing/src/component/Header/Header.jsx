import { Navbar, Container, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ searchTerm, setSearchTerm, selectedPlatform, setSelectedPlatform }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 p-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="me-auto">MediaAMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="mx-auto text-center">
            <Nav.Link as={Link} to="/" className="mx-3">Home</Nav.Link>

            {/* Platform Dropdown */}
            <NavDropdown title="Platform" id="platform-dropdown" className="mx-3">
              <NavDropdown.Item onClick={() => setSelectedPlatform("All")}>All</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelectedPlatform("PC")}>PC</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelectedPlatform("PlayStation")}>PlayStation</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelectedPlatform("Xbox")}>Xbox</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelectedPlatform("Nintendo")}>Nintendo</NavDropdown.Item>
              <NavDropdown.Item onClick={() => setSelectedPlatform("iOS")}>iOS</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="../Contactus" className="mx-3">Contact Us</Nav.Link>
            {/* <Nav.Link as={Link} to="/login" className="mx-3">Login</Nav.Link>
            <Nav.Link as={Link} to="/Signup" className="mx-3">SignUp</Nav.Link> */}
          </Nav>

          <Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search games..."
              className="me-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
