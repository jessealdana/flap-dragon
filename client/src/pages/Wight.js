import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import WightDragon from "./images/wightDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";
import WightPage from "./images/wightPage.png"

function Wight() {
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
                        <h1>Wight Dragon</h1>
                        <img src={WightDragon} alt="Wight Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            A Wight Dragon is a thing of dread. Its presence is heralded by a rending cold that sucks breath from the body. 
                            This hulking shadow claims no plastic form but its malignant coil shoulders aside permanence, breaking stone and 
                            cleaving heart and soul.  The lair of a Wight Dragon is marked by perpetual, opaescent hoar frost in a radius of 
                            one hundred yards.  This boundary must be respected at all costs.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={WightPage} alt="wight page" style={{width: "100%", height: "auto"}}/>
            </Row>
            <Row>
                <ul>
                    <li>
                        <p>Length: Unconfirmed at up to 50'. Estimates are based on the sensory effect on living things in the wake of its passage, but it is not known if the Wight Dragon's aura extends beyond its flesh.</p> 
                    </li>
                    <li>
                        <p>Wingspan: Unconfirmed at up to 50'.</p>
                    </li>
                    <li>
                        <p>Socialization: Solitary, but individuals may den in close proximity to one another.</p>
                    </li>
                    <li>
                        <p>Song: A piercing wail.</p>
                    </li>
                </ul>
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

export default Wight