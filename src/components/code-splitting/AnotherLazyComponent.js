import React from "react";
import PropTypes from "prop-types";

const AnotherLazyComponent = props => {
  const {dataCy} = props;
  return (
    <div className="tc">
      <h4 data-cy={dataCy}>Another lazy component</h4>
    </div>
  );
};

AnotherLazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired,
};

export default AnotherLazyComponent;
