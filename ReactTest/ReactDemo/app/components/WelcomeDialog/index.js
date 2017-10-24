import React, {Component} from 'react';
import FancyBorder from './FancyBorder';
import './style.css';

class WelcomeDialog extends Component {
    render() {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      )
    }
}

export default WelcomeDialog;
