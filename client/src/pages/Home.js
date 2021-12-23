import React from "react";
import { Col, Row, Container } from "../components/Grid";
import CreateSighting from "../components/CreateSighting";
import SightingsList from "../components/SightingsList";
import Nav from "../components/Nav";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Nav />
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <CreateSighting />
        </Col>
        <Col size="md-6 sm-12">
          <SightingsList />
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
