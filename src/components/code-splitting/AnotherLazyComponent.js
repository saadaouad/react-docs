import PropTypes from "prop-types";
import React from "react";

const AnotherLazyComponent = props => {
  const { dataCy } = props;
  return (
    <>
      <h4 data-cy={dataCy}>Another lazy component</h4>
    </>
  );
};

AnotherLazyComponent.propTypes = {
  dataCy: PropTypes.string.isRequired
};

export default AnotherLazyComponent;
