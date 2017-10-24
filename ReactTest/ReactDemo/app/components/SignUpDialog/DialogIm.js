import React, {Component} from 'react';
import FancyBorder from './FancyBorder';
import './css/style';

class DialogIm extends Component {
  render() {
    const {title, message, children} = this.props;
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {title}
        </h1>
        <p className="Dialog-message">
          {message}
        </p>
        <div>
          {children}
        </div>
      </FancyBorder>
    )
  }
}

export default DialogIm;
