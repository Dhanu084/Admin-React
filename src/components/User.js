import React, { Component } from "react";
import { Userslist, NewUser } from "./index";
import { connect } from "react-redux";
import { fetchAllUsers } from "../actions/users";
export class User extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }
  render() {
    const { users } = this.props;
    console.log("User", users);
    return (
      <div>
        <NewUser />
        {users.map((user) => (
          <Userslist user={user} key={user.id} dispatch={this.props.dispatch} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(User);
