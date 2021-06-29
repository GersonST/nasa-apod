import React from "react";
import logo from "../../assets/images/nasa-logo.png";
import "./styles.scss";
export function Home() {
  return (
    <div>
      <div className="container">
        <img className="logo" src={logo} alt="Nasa Logo" />
        <h1>Nasa APoD</h1>
      </div>
    </div>
  );
}
