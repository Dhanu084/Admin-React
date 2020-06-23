import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCategories } from "../actions/catalogues";

export class Catalogues extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCategories());
  }
  render() {
    console.log("Catlogues", this.props);
    return <div>Catalogues</div>;
  }
}
function mapStateToProps(state) {
  return {
    catalogues: state.catalogues,
  };
}
export default connect(mapStateToProps)(Catalogues);
