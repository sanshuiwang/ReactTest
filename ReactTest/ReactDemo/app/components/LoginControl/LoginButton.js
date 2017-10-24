import React, {Component} from 'react';

class LoginButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Login</button>
    )
  }
}

//导出组件
export default LoginButton;
