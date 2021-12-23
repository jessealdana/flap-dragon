import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import SnowDragon from "./images/snowDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";

function Snow() {
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
                        <h1>Snow Dragon</h1>
                        <img src={SnowDragon} alt="Snow Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            Soaring high above the highest peaks of the Horned Mountains,
                            the Snow Dragon is the largest of the dragons and the most formidable.
                            Its massive body crushes its prey more lethally even than its sword-lengthed 
                            claws can grasp and rend - young Snow Dragons practice their attack by hunting the Yeti.  
                            It is generally feared and given wide berth for the force of its attack can 
                            cause vast avalanches.
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

export default Snow