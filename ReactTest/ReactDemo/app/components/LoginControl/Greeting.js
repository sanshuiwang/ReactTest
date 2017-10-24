import React, {Component} from 'react';

class Greeting extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn;
    let h = null;
    if (isLoggedIn) {
      h = <h1>Welcome back!</h1>
    } else {
      h = <h1>Please sign up.</h1>
    }
    return (
      <div>
        {h}
      </div>
    )
  }
}

//导出组件
export default Greeting;
