import React from "react";

class ComponentsAndProps extends React.Component {
  render() {
    return (
      <div className="tc">
        <h2 data-cy="title">Components and Props</h2>
        <div className="pv3">
          <h4 data-cy="username" className="fw5">
            This is, {this.props.name}!
          </h4>
          <img
            data-cy="avatar"
            className="Avatar"
            src={this.props.avatarUrl}
            alt={this.props.name}
          />
        </div>
      </div>
    );
  }
}

export default ComponentsAndProps;
