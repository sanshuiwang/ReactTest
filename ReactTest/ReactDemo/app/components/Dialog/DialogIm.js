import React, {Component} from 'react';
import FancyBorder from './FancyBorder';
import './style.css';

class DialogIm extends Component {
  render() {
    const {title, message} = this.props;
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {title}
        </h1>
        <p className="Dialog-message">
          {message}
        </p>
      </FancyBorder>
    )
  }
}

export default DialogIm;
