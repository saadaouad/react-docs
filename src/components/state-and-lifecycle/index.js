import React from "react";

function FormattedDate(props) {
  return (
    <h4 className="fw5">
      It is <span className="fw6">{props.date.toLocaleTimeString()}</span>.
    </h4>
  );
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="tc">
        <h2>State and Lifecycle</h2>
        <div className="pv3">
          <FormattedDate date={this.state.date} />
        </div>
      </div>
    );
  }
}

export default Clock;
