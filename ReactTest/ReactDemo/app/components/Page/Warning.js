import React, {Component} from 'react';

class Warning extends Component {
  render() {
    const {warn} = this.props;
    return (
      <div>
        {warn
          ? (
            <div className="warning">Warning!</div>
          )
          : null}
      </div>
    );
  }
}

//导出组件
export default Warning;
