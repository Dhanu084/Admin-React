import React, { Component } from "react";
import { deleteuser, saveUser } from "../actions/users";

export default class Userslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email,
      edit: false,
      type: "",
    };
  }
  deleteUser = (id) => {
    this.props.dispatch(deleteuser(id));
  };

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
    console.log(this.state);
  };

  editUser = (field, value) => {
    //console.log(field, value);
    this.setState({
      [field]: value,
    });
  };
  saveUser = (id) => {
    const { name, email } = this.state;
    console.log(this.state);
    this.props.dispatch(saveUser(id, name, email));
    this.toggleEdit();
  };
  render() {
    const { user } = this.props;
    const { edit, name, email } = this.state;
    return (
      <div>
        <div className="users-container">
          <div className="left-block">
            <img
              src="https://image.flaticon.com/icons/svg/929/929564.svg"
              alt="user-dp"
            />
          </div>
          {!edit && (
            <div className="right-block">
              <div className="user-name">{name}</div>
              <div className="user-email">{email}</div>
              <div className="action-icons">
                <img
                  src="https://image.flaticon.com/icons/svg/598/598234.svg"
                  alt="edit"
                  onClick={this.toggleEdit}
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1828/1828843.svg"
                  alt="delete"
                  onClick={() => this.deleteUser(user.id)}
                />
              </div>
            </div>
          )}
          {edit && (
            <div className="right-block">
              <div className="user-name field">
                <input
                  type="text"
                  placeholder={name}
                  onChange={(e) => this.editUser("name", e.target.value)}
                />
              </div>
              <div className="user-email field">
                <input
                  type="email"
                  placeholder={email}
                  onChange={(e) => this.editUser("email", e.target.value)}
                />
              </div>
              <div className="action-icons">
                <button
                  className="btn success"
                  onClick={() => this.saveUser(user.id)}
                >
                  save
                </button>
                <button className="btn failure" onClick={this.toggleEdit}>
                  cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
