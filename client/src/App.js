import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import FieldGuide from "./pages/FieldGuide";
import DragonIndex from "./pages/DragonIndex";
import Snow from "./pages/Snow";
import Sun from "./pages/Sun";
import Shimmer from "./pages/Shimmer";
import Cove from "./pages/Cove";
import Grass from "./pages/Grass";
import Peach from "./pages/Peach";
import Surf from "./pages/Surf";
import Wight from "./pages/Wight";
import Gossamer from "./pages/Gossamer";
import Chime from "./pages/Chime";
import Shelled from "./pages/Shelled";
import { StoreProvider } from "./utils/GlobalState";
import FavoritesList from "./pages/FavoritesList";
import "./pages/style.css";

function App() {
  return (
    <div style={{backgroundColor: "rgb(54,129,119)"}}>
    <Router>
        <StoreProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/sightings/:id" component={Detail} />
            <Route exact path="/fieldguide" component={FieldGuide} />
            <Route exact path="/dragonindex" component={DragonIndex} />
            <Route exact path="/snow" component={Snow} />
            <Route exact path="/sun" component={Sun} />
            <Route exact path="/shimmer" component={Shimmer} />
            <Route exact path="/cove" component={Cove} />
            <Route exact path="/grass" component={Grass} />
            <Route exact path="/peach" component={Peach} />
            <Route exact path="/surf" component={Surf} />
            <Route exact path="/wight" component={Wight} />
            <Route exact path="/shelled" component={Shelled} />
            <Route exact path="/gossamer" component={Gossamer} />
            <Route exact path="/chime" component={Chime} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
    </Router>
    </div>
  );
}

export default App;
