import React from 'react';
import Avatar from './Avatar';

class UserInfo extends React.Component {
  render() {
    return (
      <div className="tc">
        <h2>This is, {this.props.name}!</h2>
        <Avatar avatarUrl={this.props.avatarUrl} name={this.props.name} />
      </div>
    );
  }
}

export default UserInfo;
