import React from "react"
import { Col, Row, Container } from "../components/Grid";
import "./style.css";
import GalleryIndex from "../components/GalleryIndex";
import Footer from "../components/Footer"
import SurfDragon from "./images/surfDragon.png"
import Nav from "../components/Nav";
import Scales from "./images/scales.png";
import SurfPage from "./images/surfPage.png"

function Surf() {
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
                        <h1>Surf Dragon</h1>
                        <img src={SurfDragon} alt="Surf Dragon" style={{width: "100%", height: "auto"}} />
                </Col>
                <Col size="md-3">
                    <div style={{marginTop:"10px", backgroundColor: "rgb(207, 236, 232)", padding: "10px", borderStyle: "solid", borderColor: "black", borderWidth: "1px"}}>
                        <p id="caption">
                            The Surf Dragon is a silvery arrow of despair.  Resplendant in metallic azures, teals and 
                            aquas, it dazzles the eye with careless grace as it deals death between the waves.  The Surf Dragon
                            is powerful and fast, easily seizing a dolphin or seal which it eviscerates in mid-air before 
                            carrying the carcass back to the floating rafts of kelp it prefers as a nest.  Nevertheless, 
                            the Surf Dragon is a doting parent and keeps its kits close by until they are nearly as large as 
                            the adults. It is not unusual for the young from several broods to hunt with their parents.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <img src={SurfPage} alt="surf page" style={{width: "100%", height: "auto"}}/>
            </Row>
            <Row>
                <ul>
                    <li>
                        <p>Length: 25'</p> 
                    </li>
                    <li>
                        <p>Wingspan: 15'</p>
                    </li>
                    <li>
                        <p>Socialization: Family groups of parents and siblings can grow to eight or nine individuals.</p>
                    </li>
                    <li>
                        <p>Song: A laughing cackle in the nesting area.  Silent while hunting and scouting.</p>
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

export default Surf