import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import ShelledDragon from "./images/shelledDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";

function Shelled() {
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
                        <h1>Shelled Dragon</h1>
                        <img src={ShelledDragon} alt="Shelled Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The Shelled Dragon is a ponderous mass of ornery power.  Having only short, stubbed wings, it has lost the capability of true 
                            flight - a necessary concession to its bulk which is a combination of brute muscle and a massive shell of astonishing hardness and edge.
                            Legend holds that the shell is actually formed of rough, unpolished diamond but because of the Shelled Dragon's extreme 
                            toughness and apparently limitless longevity, the hypothesis has never been tested.
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

export default Shelled