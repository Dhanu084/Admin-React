import React, { Component } from "react";
import { deleteCategory, editCategory } from "../actions/catalogues";
export default class Catalogueslist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.product.name,
      edit: false,
    };
  }
  delete = (id) => {
    this.props.dispatch(deleteCategory(id));
  };
  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };
  handleNameChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  handleSubmit = (id) => {
    const { name } = this.state;
    this.props.dispatch(editCategory(id, name));
    this.toggleEdit();
  };
  render() {
    const { edit } = this.state;
    const { product } = this.props;
    console.log(product);
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
                  onClick={this.toggleEdit}
                />
                <img
                  src="https://image.flaticon.com/icons/svg/1828/1828843.svg"
                  alt="delete"
                  onClick={() => this.delete(product.id)}
                />
              </div>
              <div className="subcategory">{product.subcategory}</div>
            </div>
          )}
          {edit && (
            <div className="right-block">
              <div className="user-name field">
                <input
                  type="text"
                  onChange={(e) =>
                    this.handleNameChange("name", e.target.value)
                  }
                />
              </div>

              <div className="action-icons">
                <button
                  className="btn success"
                  onClick={() => this.handleSubmit(product.id)}
                >
                  save
                </button>
                <button className="btn failure" onClick={this.toggleEdit}>
                  canceled
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
