import React from "react"
import Nav from "../components/Nav"
import { Col, Row, Container } from "../components/Grid";
import Dragonsoar from "./images/dragonsoar.gif";
import Scales from "./images/scales.png"


function Soaring() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Nav />
                </Col>
            </Row>
            <Row>
                <img src={Dragonsoar} alt="soar gif" id="gif" />
            </Row>
            <Row >
                <img src={Scales} alt="scales"  id="scaly"/>
            </Row>
        </Container>
    )
}

export default Soaring