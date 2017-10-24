import React, {Component} from 'react';

class LoggingButton extends Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    //回调中使用箭头函数来确保绑定this
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click Me
      </button>
    )
  }
}

//导出组件
export default LoggingButton;
