import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Col md={6} className='mx-auto mt-5'>
        <Outlet />
      </Col>
    );
  }
}

export default App;
