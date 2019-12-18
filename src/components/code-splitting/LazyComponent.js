import React from "react";
import PropTypes from "prop-types";

const LazyComponent = props => {
  const {dataCy} = props;
  return (
    <div className="tc">
      <h4 data-cy={dataCy}>Lazy component</h4>
    </div>
  );
};

LazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired,
};

export default LazyComponent;
