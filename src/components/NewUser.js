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
    this.setState({
      name: "",
      email: "",
      id: this.state.id + 1,
    });
  };

  getReport = () => {
    const { users } = this.props;
    const data = users.map((row) => ({
      name: row.name,
      email: row.email,
    }));
    console.log(data);
    const headers = Object.keys(data[0]);

    const csvData = [];
    csvData.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => {
        return `"${row[header]}"`; //to escape , in the data
      });
      csvData.push(values.join(","));
    }
    const newcsvData = csvData.join("\n");
    console.log(newcsvData);
    this.download(newcsvData);
  };
  download = (data) => {
    const blob = new Blob([data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
          <div>
            <button className="btn success" onClick={this.getReport}>
              Export Csv
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
