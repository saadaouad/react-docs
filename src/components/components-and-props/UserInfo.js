import React from "react";
import Avatar from "./Avatar";

class UserInfo extends React.Component {
  render() {
    return (
      <div className="tc">
        <h2>Components and Props</h2>
        <div className="pv3">
          <h4 className="fw5">This is, {this.props.name}!</h4>
          <Avatar avatarUrl={this.props.avatarUrl} name={this.props.name} />
        </div>
      </div>
    );
  }
}

export default UserInfo;
