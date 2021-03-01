import React from 'react'
import './App.css'
import { Container, Col, Row } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Upload from './components/Upload.js'
import Retrieve from './components/Retrieve.js'

function App() {
  //   hash: 'QmRL8GHFuQWQd93WhG2PexFxkys6veQbdjvb5N8XmAjrzU'
  return (
    <Container fluid>
      <Header></Header>
      <Row>
        <Col xs lg="2">
          <Upload />
        </Col>
        <Col md="auto"></Col>
        <Col xs lg="2">
          <Retrieve />
        </Col>
      </Row>
      <Footer></Footer>
    </Container>
  )
}

export default App
