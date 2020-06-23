import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className="menu">
          <ul>
            <Link to="/catalogues">
              <li>Catalogues</li>
            </Link>
            <li>Users</li>
          </ul>
        </div>
      </div>
    );
  }
}
