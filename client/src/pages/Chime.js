import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import ChimeDragon from "./images/chimeDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png";
import ChimePage from "./images/chimePage.png";

function Chime() {
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
                    <h1>Chime Dragon</h1>
                    <img src={ChimeDragon} alt="Chime Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                    <p id="catpion">
                        Chime Dragons are among the most feared of the flappy dragons.  Many a traveler, alone on the open moors, has despaired 
                        to hear the first faint notes of bells on the wind that signal the approach of Chime Dragons. Chime Dragons work together,
                        homing in on their prey from several directions as the sound from their cymbal-like scales and wings swells in an overwhelming,
                        confusing, maddening and deadly crescendo.
                    </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={ChimePage} alt="chime page" style={{width: "100%", height: "auto"}}/>
            </Row>
            <Row>
                <ul>
                    <li>
                        <p>Length: 24'</p> 
                    </li>
                    <li>
                        <p>Wingspan: 24'</p>
                    </li>
                    <li>
                        <p>Socialization: Individuals live in hunting groups of five or six.</p>
                    </li>
                    <li>
                        <p>Song: None, however their scales clash and ring ceaselessly while the volume rises and falls according to the Chime Dragons' moods.</p>
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

export default Chime