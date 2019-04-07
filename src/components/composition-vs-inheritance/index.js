import React, { Component } from "react";

function FancyBorder(props) {
  return <div className={props.color}>{props.children}</div>;
}

function Dialog(props) {
  return (
    <FancyBorder color="black-80">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function Contacts() {
  return <div className="gray" />;
}

function Chat() {
  return <div className="blue" />;
}

class CompositionVsInheritance extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }

  render() {
    return (
      <div className="tc">
        <Dialog
          title="Mars Exploration Program"
          message="How should we refer to you?"
        >
          <div className="flex justify-center">
            <input value={this.state.login} onChange={this.handleChange} />
            <div className="ph2">
              <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </div>
          </div>
        </Dialog>
        <SplitPane left={<Contacts />} right={<Chat />} />
      </div>
    );
  }
}

export default CompositionVsInheritance;
