import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import CoveDragon from "./images/coveDragon.png"
import Nav from "../components/Nav"
import Scales from "./images/scales.png"

function Cove() {
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
                        <h1> Cove Dragon</h1>
                        <img src={CoveDragon} alt="Cove Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            Cove Dragons are stealthy opportunists.  As their natural habitat was threatened, they found 
                            that their flattened bodies could adapt to roost in the semi-shadowed curve of a decorative ceiling 
                            cove and the species moved in with humans.  The color and pattern of their skin conforms to the surface around them and camouflages them 
                            from the mice upon which they prey. Due to their relatively small size, they do not pose a threat to
                            their hosts, but their numbers can be a nuisance as they breed rapidly.  It is not uncommon for the owners
                            of a large, well appointed mansion to return home from a trip abroad and turn on the lights only to find
                            them dimmed by clouds of Cove Dragons.
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

export default Cove