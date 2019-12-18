import React, { Component } from "react";

function UserGreeting(props) {
  return <p data-cy="sub-title">Welcome back!</p>;
}

function GuestGreeting(props) {
  return <p data-cy="sub-title">Please sign up.</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button data-cy="button" onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button data-cy="button" onClick={props.onClick}>Logout</button>;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? (
      <LogoutButton id="logout-button" onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton id="login-button" onClick={this.handleLoginClick} />
    );

    return (
      <div className="tc">
        <h2 data-cy="title">Conditional rendering</h2>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
