import React from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../actions/users";
import { User, NewUser, Navbar, Catalogues } from "./index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }
  render() {
    const { users } = this.props;
    console.log(this.props);
    return (
      <Router>
        <div>
          <Navbar />
          <NewUser />
          {users.map((user) => (
            <User user={user} key={user.id} dispatch={this.props.dispatch} />
          ))}
          <Route exact path="/catalogues" component={Catalogues} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(App);
