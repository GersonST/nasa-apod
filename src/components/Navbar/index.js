import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/" exact>
          Home
        </Link>
      </ul>
    </div>
  );
}
