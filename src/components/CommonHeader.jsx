import React from 'react'
import { Link } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'
import { BsBagFill } from "react-icons/bs";

const CommonHeader = () => {
  return (
    <Navbar bg="info" variant="dark" className="mb-3">
      <Navbar.Brand as={Link} to="/">Shopping</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Shop</Nav.Link>
        <Nav.Link as={Link} to="/cart">My cart</Nav.Link>
        <Nav.Link as={Link} to="/cart"><BsBagFill className="align-text-top" /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default CommonHeader