import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import GossamerDragon from "./images/gossamerDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png"

function Gossamer() {
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
                        <h1>Gossamer Dragon</h1>
                        <img src={GossamerDragon} alt="Gossamer Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The Gossamer Dragon is a shabby, tattered mess.  Its silhouette is hard to distinguish as its great wings gather
                            and drape, spread out upon the ancient branches of old growth cypress deep in the swamp.  Sneaking like weeping 
                            moss, the Gossamer Dragon is able to smother and strangle prey that becomes hopelessly entangled in its scaly webs
                            of tendon and bone.
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

export default Gossamer