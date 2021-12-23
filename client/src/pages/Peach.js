import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import PeachDragon from "./images/peachDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png";

function Peach() {
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
                        <h1>Peach Dragon</h1>
                        <img src={PeachDragon} alt="Peach Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The Peach Dragon is an ambush hunter.  It spends the day roosting in the forest canopy 
                            with its sinuous body tucked into a ball and its florid wings wrapped protectively about 
                            it. Only a close inspection will distinguish it from the ripe fruit from which it derives 
                            its name.  Unfortunately for a hungry monkey that gets too close, the Peach Dragon is savagely 
                            equipped to surprise its unsuspecting prey and dispatch it before carrying it off in a flurry
                            of powerful wingbeats.
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

export default Peach