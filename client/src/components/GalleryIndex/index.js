import React from "react";
import { List, ListItem } from "../../components/List";
import "./style.css";
import { Link } from "react-router-dom";

function GalleryIndex() {
    return (
            <div id="fullbar">
                <List id="index">
                    <p id="frequency" style={{color: "white"}}>Common</p>
                        <ListItem>
                            <Link to="/cove">
                                <button id="cove">Cove Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/grass">
                                <button id="grass">Grass Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/peach">
                                <button id="peach">Peach Dragon</button>
                            </Link>
                        </ListItem>                       
                        <ListItem>
                            <Link to="/surf">
                                <button id="surf">Surf Dragon</button>
                            </Link>
                        </ListItem>
                        <p id="frequency" style={{color: "white"}}>Uncommon</p>
                        <ListItem>
                            <Link to="/wight">
                                <button id="wight">Wight Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/gossamer">
                                <button id="gossamer">Gossamer Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/chime">
                                <button id="chime">Chime Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/shelled">
                                <button id="shelled">Shelled Dragon</button>
                            </Link>
                        </ListItem>
                        <p id="frequency" style={{color: "white"}}>Rare</p>
                        <ListItem>
                            <Link to="/snow">
                                <button id="snow">Snow Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to="/sun">
                                <button id="sun">Sun Dragon</button>
                            </Link>
                        </ListItem>
                        <ListItem> 
                            <Link to="/shimmer">
                                    <button id="shimmer">Shimmer Dragon</button>
                            </Link>
                        </ListItem>
                </List>            
            </div>
    )
} 

export default GalleryIndex