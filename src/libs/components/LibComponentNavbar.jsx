import {Container, Nav, Navbar } from "react-bootstrap";
import {useContext} from "react";
import {ContextApplication} from "../config/contexts.js";
import useJWT from "../hooks/useJWT.jsx";


const LibComponentNavbar = () => {
  const jwt = useJWT()

  const applcation = useContext(ContextApplication);

  const signOut = () => {
    jwt.signOut();
    applcation.setIsAuthenticated(false);
  }

  return (
    <Navbar expand="lg"  bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#">Aplikasi Penjualan</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {applcation.isAuthenticated && (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#/">Barang</Nav.Link>
              <Nav.Link href="#/supplier">Supplier</Nav.Link>
              <Nav.Link href="#/terima">Pembelian</Nav.Link>
              <Nav.Link onClick={signOut}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Container>
    </Navbar>
  )
}

export default LibComponentNavbar;