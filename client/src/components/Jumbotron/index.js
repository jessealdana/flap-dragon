import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "20%", clear: "both", paddingTop: "10px", textAlign: "center", backgroundColor: "black" }}
      className="jumbotron border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
