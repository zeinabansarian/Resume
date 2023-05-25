import React from 'react'
import Background from './Component/background/Background'
import Sidebar from './Component/Sidebar/Sidebar'
import './Fonts/BebasNeue-Regular.ttf'
import { Container , Row , Col } from 'react-bootstrap'

import About from './Pages/About/About'
import Profile from './Component/Profile/Profile'
 
export default function App() {
  return (
    <div>
      <Background />
      <Container>
        <Row>
          <Col lg={2}>
            <Sidebar />
          </Col>
          <Col lg={3}>
            <Profile />
          </Col>
        </Row>

      </Container>
    </div>
  )
}
