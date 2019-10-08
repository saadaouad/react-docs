import React, { Component } from "react";
import PropTypes from "prop-types";

class AnotherLazyComponent extends Component {
  render() {
    const {dataCy} = this.props;
    return (
      <div className="tc">
        <h4 data-cy={dataCy}>Another lazy component</h4>
      </div>
    );
  }
}

AnotherLazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired,
};

export default AnotherLazyComponent;
