import React from 'react'
import { Navbar } from 'react-bootstrap'
const Header = () => {
  return (
    <div>
      <Navbar bg="light">
        <Navbar.Brand href="#home">My IPFS Tool</Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Header
