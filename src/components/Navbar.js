import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="menu">
          <ul>
            <li>
              <Link to="/catalogues">Catalogues</Link>
            </li>

            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
