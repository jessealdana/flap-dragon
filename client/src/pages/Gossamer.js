import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import GossamerDragon from "./images/gossamerDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png";
import GossamerPage from "./images/gossamerPage.png"

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
                            of tendon and bone.  As it roosts, a Gossamer Dragon's hide entagles with the tree upon which it rests and, when it 
                            departs, the dragon leaves behind scattered bits of its hide.  Young Gossamer Dragons develop from this shed
                            skin, leading some to theorize that this dragon is akin to coral or mushrooms.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={GossamerPage} alt="gossamer page" style={{width: "100%", height: "auto"}}/>
            </Row>
            <Row>
                <ul>
                    <li>
                        <p>Length: 50'</p> 
                    </li>
                    <li>
                        <p>Wingspan: 75'</p>
                    </li>
                    <li>
                        <p>Socialization: Solitary</p>
                    </li>
                    <li>
                        <p>Song: Mute</p>
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

export default Gossamer