import React, { Component } from "react";
import { connect } from "react-redux";

export class NewCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <div className="new-user-container">
        <div className="controller">
          <div className="image-container">
            <img
              src="https://image.flaticon.com/icons/svg/2942/2942322.svg"
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

          <div>
            <button className="btn success" onClick={() => this.handleSubmit()}>
              Add Category
            </button>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    catalogues: state.catalogues,
  };
}
export default connect(mapStateToProps)(NewCategory);
