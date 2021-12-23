import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import GrassDragon from "./images/grassDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png"

function Grass() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Nav />
                </Col>
            </Row>
            <Row>               
                <Col size="md-3">
                    <GalleryIndex />
                </Col>
                <Col size="md-6">
                        <h1>Grass Dragon</h1>
                        <img src={GrassDragon} alt="GrassDragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The presence of Grass Dragons is announced by an enormous agitation in the air - 
                            a rush of wind stirred by many wings.  These graceful dragons have a looping, swooping gait that rarely 
                            reaches a significant height because they prefer the safety of the grass.  In areas 
                            where the turf is short the dragons almost skitter across the ground.  Perhaps most 
                            impressive are the numbers in which the Grass Dragons travel and the ferocity this 
                            inspires in their hunts.  A flock of Grass Dragons can overcome prey of much larger
                            size.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={Scales} alt="scales"  id="scaly"/>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default Grass