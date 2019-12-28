import React, { Fragment } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, {
      info,
      currenturl: typeof window !== "undefined" && window.location.href
    });
    // todo raise error on a tracking error software
  }

  render() {
    if (this.state.hasError) {
      return <p className="pa2">Something went wrong</p>;
    }

    return <Fragment>{this.props.children}</Fragment>;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
