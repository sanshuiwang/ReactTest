import React, {Component} from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    //属性初始化程序语法：
    // 使this在回调中起作用,否则在调用函数报错
    //注意：否则还可以在回调中使用箭头函数来确保绑定this--onClick={(e) => this.handleClick(e)}--
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

//导出组件
export default Toggle;
