import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/users";

export class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: 5,
    };
  }

  handleChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };
  addNewUser = () => {
    const { id, name, email } = this.state;
    let user = {
      id: id,
      name: name,
      email: email,
    };
    this.props.dispatch(addUser(user));
  };
  render() {
    return (
      <div className="new-user-container">
        <div className="controller">
          <div className="image-container">
            <img
              src="https://image.flaticon.com/icons/svg/2922/2922518.svg"
              alt="user-dp"
            />
          </div>
          <div className="user-name">
            <input
              type="text"
              placeholder="name"
              onChange={(e) => this.handleChange("name", e.target.value)}
            />
          </div>
          <div className="user-email">
            <input
              type="email"
              placeholder="email"
              onChange={(e) => this.handleChange("email", e.target.value)}
            />
          </div>
          <div>
            <button className="btn success" onClick={this.addNewUser}>
              Add User
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}
export default connect(mapStateToProps)(NewUser);
