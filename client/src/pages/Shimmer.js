import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import ShimmerDragon from "./images/shimmerDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";
import ShimmerPage from "./images/shimmerPage.png";

function Shimmer() {
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
                        <h1>Shimmer Dragon</h1>
                        <img src={ShimmerDragon} alt="Shimmer Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The Shimmer Dragon is a sinister legend of menace and sorrow. 
                            Visual records of these dragons are sketchy because so few travelers have
                            survived an encounter with one. The only constant is a throbbing sensation
                            and glow - as of static electricity. This dragon must not be confronted.
                            The only option is to hide, which, in the wastes the Shimmer Dragon
                            prefers, can be difficult to manage. 
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={ShimmerPage} alt="shimmer page" style={{width: "100%", height: "auto"}}/>
            </Row>
            <Row>
                <ul>
                    <li>
                        <p>Length: Unknown</p> 
                    </li>
                    <li>
                        <p>Wingspan: Unknown</p>
                    </li>
                    <li>
                        <p>Socialization: N/A</p>
                    </li>
                    <li>
                        <p>Song: Unknown</p>
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

export default Shimmer