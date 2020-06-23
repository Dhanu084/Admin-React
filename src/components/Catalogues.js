import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCategories } from "../actions/catalogues";
import { Catalogueslist, NewCategory } from "./index";
export class Catalogues extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllCategories());
  }
  render() {
    const { catalogues } = this.props;
    console.log("catalogues", catalogues);
    return (
      <div>
        <NewCategory />
        {catalogues.map((catalogue) => (
          <Catalogueslist
            product={catalogue}
            dispatch={this.props.dispatch}
            key={catalogue.id}
          />
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    catalogues: state.catalogues,
  };
}
export default connect(mapStateToProps)(Catalogues);
