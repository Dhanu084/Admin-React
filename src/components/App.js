import React from "react";
import { connect } from "react-redux";

import { User, NewUser, Navbar, Catalogues } from "./index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Route
            exact
            path="/"
            render={(props) => {
              return <User {...props} />;
            }}
          />
          <Route path="/catalogues" component={Catalogues} />
        </div>
      </Router>
    );
  }
}
