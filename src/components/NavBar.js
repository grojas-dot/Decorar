import React from 'react';
import LogoDecorar from '../images/LogoDecorar.jpeg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
  <Navbar.Brand as={NavLink} to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <img
      src={LogoDecorar}
      alt="Logo DecoAr"
      style={{ height: '24px', width: 'auto', marginRight: '8px' }}
    />
    DecoAr
  </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/category/regalos">Regalos</Nav.Link>
            <Nav.Link as={NavLink} to="/category/ofertas">Ofertas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/bazar">Bazar</Nav.Link>
            <Nav.Link as={NavLink} to="/category/herramientas">Herramientas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/mascotas">Mascotas</Nav.Link>
            <Nav.Link as={NavLink} to="/category/automovil">Automovil</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart">
                <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;