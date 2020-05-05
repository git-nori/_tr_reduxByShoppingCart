import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'
import { BsBagFill } from "react-icons/bs";

const CommonHeader = () => {
  return (
    <Navbar bg="info" variant="dark" className="mb-3">
      <Navbar.Brand href="/">Shopping</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="/">Shop</Nav.Link>
        <Nav.Link href="/cart">My cart</Nav.Link>
        <Nav.Link href="/cart"><BsBagFill className="align-text-top"/></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default CommonHeader