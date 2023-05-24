import React from 'react'
import Background from './Component/background/Background'
import Sidebar from './Component/Sidebar/Sidebar'
import './Fonts/BebasNeue-Regular.ttf'
import { Container , Row , Col } from 'react-bootstrap'
export default function App() {
  return (
    <div>
      <Background />
      <Container>
        <Row>
          
          <Col lg={2}>

          <Sidebar />
          </Col>

        </Row>

      </Container>
    </div>
  )
}
