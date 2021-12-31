import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./style.css";
import Scales from "../pages/images/scales.png"
import Dragonsoar from "./images/dragonsoar.gif";

function FieldGuide() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Nav />
                </Col>
            </Row>
            <Row>
                <h2 id="aboutTitle">About Dragons That Are Flappy</h2>
                    <Col size="md-4">
                        <div id="guides">
                            <h5 style={{backgroundColor: "whitesmoke", padding: "2px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>Not All Dragons Flap Frequently</h5>
                            <p>
                                All dragons move about from here to there on some errand or another.  
                                However, the mode of travel varies widely from species to species.  
                                Some dragons soar, high above plains and mountains, and rarely flap their huge, broad wings.  
                                Others flutter about, seemingly haphazardly, while navigating dense networks of passages 
                                like city canyons or leafy brambles and flap almost continuously.
                            </p>
                            <Link to="/soar">
                                <button id="soar">Soaring</button>
                            </Link>
                        </div>
                    </Col>
                    <Col size="md-4">
                        <Row>
                            <img src={Dragonsoar} alt="soar gif" id="gif" />
                        </Row>
                    </Col>
                    <Col size="md-4" id="guides">
                        <div id="guides">
                            <h5 style={{backgroundColor: "whitesmoke", padding: "2px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>Form Follows Function</h5>
                            <p>
                                Dragons that spend more time aloft, soaring in the high cold air tend to be larger animals with robust, 
                                wide bodies that plow through the sky and are not buffeted about by the wind.  
                                These dragons average about one wing stroke per hour when airborne.  
                                They are not, generally speaking, Flappy Dragons.  On the other hand, dragons that hew more closely 
                                to the surface of the earth and its many facets and textures tend to be lithely built 
                                with sinuous bodies that adapt to their immediate context and need.  
                                They average several dozen wingstrokes per minute and appear to dance through the air to a complex rhythm.  
                                These are the Flappy Dragons.
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
export default FieldGuide