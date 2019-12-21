import React from "react";
import PropTypes from "prop-types";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

class TemperatureInput extends React.Component {
  handleChange = e => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend
          data-cy={scale === "c" ? "celsius-legend" : "fahrenheit-legend"}
        >
          Enter temperature in {scaleNames[scale]}:
        </legend>
        <input
          data-cy={scale === "c" ? "celsius-input" : "fahrenheit-input"}
          value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

TemperatureInput.propTypes = {
  temperature: PropTypes.string,
  scale: PropTypes.string,
  onTemperatureChange: PropTypes.func
};

export default TemperatureInput;
