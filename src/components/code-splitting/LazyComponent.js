import React, { Component } from "react";
import PropTypes from "prop-types";

class LazyComponent extends Component {
  render() {
    const {dataCy} = this.props;
    return (
      <div className="tc">
        <h4 data-cy={dataCy}>Lazy component</h4>
      </div>
    );
  }
}

LazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired,
};

export default LazyComponent;
