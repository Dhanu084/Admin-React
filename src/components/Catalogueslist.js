import React, { Component } from "react";

export default class Catalogueslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
  }
  render() {
    const { edit } = this.state;
    const { product } = this.props;

    return (
      <div>
        <div className="users-container">
          <div className="left-block">
            <img src={product.image} alt="user-dp" />
          </div>
          {!edit && (
            <div className="right-block">
              <div className="user-name">{product.name}</div>
              <div className="action-icons">
                <img
                  src="https://image.flaticon.com/icons/svg/598/598234.svg"
                  alt="edit"
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1828/1828843.svg"
                  alt="delete"
                />
              </div>
            </div>
          )}
          {edit && (
            <div className="right-block">
              <div className="user-name field">
                <input type="text" />
              </div>
              <div className="user-email field">
                <input type="email" />
              </div>
              <div className="action-icons">
                <button className="btn success">save</button>
                <button className="btn failure">cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
