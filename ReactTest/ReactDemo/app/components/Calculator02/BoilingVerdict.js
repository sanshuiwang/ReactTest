import React, {Component} from 'react';

class BoilingVerdict extends Component {
  render() {
    const {celsius} = this.props;
    let p = null;
    if (celsius >= 100) {
      p = <p>The water would boiling.</p>
    } else {
      p = <p>The water would not boiling.</p>
    }
    return (
      <div>{p}</div>
    )
  }
}

//导出组件
export default BoilingVerdict;
