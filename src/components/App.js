import React from "react";
import { connect } from "react-redux";
import { fetchAllUsers } from "../actions/users";
import { User } from "./index";
export class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAllUsers());
  }
  render() {
    const { users } = this.props;
    console.log(this.props);
    return (
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} />
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
export default connect(mapStateToProps)(App);
