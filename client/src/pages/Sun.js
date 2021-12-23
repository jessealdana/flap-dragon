import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import SunDragon from "./images/sunDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";

function Sun() {
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
                        <h1>Sun Dragon</h1>
                        <img src={SunDragon} alt="Sun Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            Though its vast pinions gather up thermals from three to four acres
                            as it lumbers massively across the sky, the Sun Dragon never attains 
                            the bulk of its snowy cousin. The Sun Dragon's body is wide but flattened, 
                            the better to disappear into narrow crevices of rocky outcroppings where 
                            it spends its days in the cool dark. A Sun Dragon emerges in early morning 
                            or late afternoon, launching itself into the sky where its thin scales 
                            quickly heat up from the sun's rays and become incandescent. Only when it
                            blazes like a star does it plunge down on its haplessly blinded prey.
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

export default Sun