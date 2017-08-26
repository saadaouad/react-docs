import React from 'react';

class ComponentsAndProps extends React.Component {
  render() {
    return (
      <div>
        <h2>This is, {this.props.name}!</h2>
      </div>
    );
  }
}

export default ComponentsAndProps;
