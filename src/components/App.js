import React from "react";
import { connect } from "react-redux";

export class App extends React.Component {
  render() {
    return <div>Hi</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(App);
