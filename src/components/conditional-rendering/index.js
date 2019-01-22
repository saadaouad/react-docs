import React, { Component } from "react";

function UserGreeting(props) {
  return <p>Welcome back!</p>;
}

function GuestGreeting(props) {
  return <p>Please sign up.</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const button = isLoggedIn ? (
      <LogoutButton id="logout-button" onClick={this.handleLogoutClick} />
    ) : (
      <LoginButton id="login-button" onClick={this.handleLoginClick} />
    );

    return (
      <div className="tc">
        <h2>Conditional rendering</h2>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
