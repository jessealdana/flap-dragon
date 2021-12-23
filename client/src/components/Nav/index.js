import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: "5vh"}}>
      <a className="navbar-brand" href="/">
        Flappy Dragon
      </a>
      <a className="navbar-brand" href="/fieldguide">
        Field Guide
      </a>
      <a className="navbar-brand" href="/dragonindex">
        Dragon Index
      </a>
      {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
    </nav>
  );
}

export default Nav;
