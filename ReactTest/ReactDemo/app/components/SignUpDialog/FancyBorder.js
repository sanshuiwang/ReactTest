import React, {Component} from 'react';

class FancyBorder extends Component {
  render() {
    console.log(100,this.props.children);
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    );
  }
}

export default FancyBorder;
