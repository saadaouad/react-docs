import React from 'react';

class Avatar extends React.Component {
  render() {
  return (
    <img className="Avatar"
      src={this.props.avatarUrl}
      alt={this.props.name}
    />
  );
  }
}

export default Avatar;
