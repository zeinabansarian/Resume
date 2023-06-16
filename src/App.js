import React from "react";
import Background from "./Component/background/Background";
import Sidebar from "./Component/Sidebar/Sidebar";
import "./Fonts/BebasNeue-Regular.ttf";
import routes from "./routes";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import Profile from "./Component/Profile/Profile";
import { useRoutes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  let router = useRoutes(routes);
  return (
    <div className="app">
      <Background />
      <Container>
        <Row>
          <Col xl={1} md={2} className="resPad">
            <Sidebar />
          </Col>
          <Col xl={5} md={10} className="resPad">

            <Profile />
          </Col>
          <Col xl={6} md={12} className="resPad">
          {router}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
