import PropTypes from "prop-types";
import React from "react";

const LazyComponent = props => {
  const { dataCy } = props;
  return (
    <>
      <h4 data-cy={dataCy}>Lazy component</h4>
    </>
  );
};

LazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired
};

export default LazyComponent;
