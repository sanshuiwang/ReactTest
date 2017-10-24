import React, {Component} from 'react';
import Warning from './Warning'
class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWarning: true
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }
  render() {
    return (
      <div>
        <Warning warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning
            ? 'Hide'
            : 'Show'}
        </button>
      </div>
    )
  }
}

//导出组件
export default Page;
