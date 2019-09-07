import React, {Component} from 'react';
import './styles.scss';

class HappyHacking extends Component {
  render() {
    return (
      <div className="tc">
        <p data-cy="footer" className="App-intro">
          <code>Happy hacking!</code>
        </p>
      </div>
    );
  }
}

export default HappyHacking;
