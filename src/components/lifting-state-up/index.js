import React from "react";

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class LiftingStateUp extends React.Component {
  render() {
    return <div>Salam</div>;
  }
}

export default LiftingStateUp;
