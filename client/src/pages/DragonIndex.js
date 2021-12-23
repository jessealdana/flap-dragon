import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import "./style.css"
import { Link } from "react-router-dom";
import Scales from "../pages/images/scales.png"

function DragonIndex() { 

    return (

        <div className="container1" id="rarity">
            <Row>
                <Col size="md-12">
                <Nav />
                </Col>
            </Row>
            <div className="row" id="torso">
                <div className="col-sm-6" id="common">
                  <h3>Common Species of Dragons</h3>
                    <ul>
                        <li>
                            <Link to="/cove">
                                <button id="cove">Cove Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/grass">
                                <button id="grass">Grass Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/peach">
                                <button id="peach">Peach Dragon</button>
                            </Link>
                        </li>                        
                        <li>
                            <Link to="/surf">
                                <button id="surf">Surf Dragon</button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6" id="uncommon">
                  <h3>Uncommon Species of Dragons</h3>
                    <ul>
                        <li>
                            <Link to="/gossamer">
                                <button id="gossamer">Gossamer Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/wight">
                                <button id="wight">Wight Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/chime">
                                <button id="chime">Chime Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/shelled">
                                <button id="shelled">Shelled Dragon</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row" id="legs">
                <div className="col-sm-12" id="rare">
                  <h3>Rare Species of Dragons</h3>
                    <ul>
                        <li>
                            <Link to="/snow">
                                <button id="snow">Snow Dragon</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sun">
                                <button id="sun">Sun Dragon</button>
                            </Link>
                        </li>
                        <li> 
                            <Link to="/shimmer">
                                    <button id="shimmer">Shimmer Dragon</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src={Scales} alt="scales"  id="scaly"/>
            </div>
            <div className="footer">
                <h4>copyright by Dragons</h4>
            </div>
        </div>

    )
}


export default DragonIndex;
