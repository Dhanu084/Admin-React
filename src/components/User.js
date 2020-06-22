import React, { Component } from "react";

export default class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="users-container">
        <div className="left-block">
          <img src="https://image.flaticon.com/icons/svg/929/929564.svg" />
        </div>
        <div className="right-block">
          <div className="user-name">{user.name}</div>
          <div className="user-email">{user.email}</div>
          <div className="action-icons">
            <img src="https://image.flaticon.com/icons/svg/598/598234.svg" />
            <img src="https://image.flaticon.com/icons/svg/1828/1828843.svg" />
          </div>
        </div>
      </div>
    );
  }
}
