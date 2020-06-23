import React, { Component } from "react";
import { connect } from "react-redux";

export class Catalogues extends Component {
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
