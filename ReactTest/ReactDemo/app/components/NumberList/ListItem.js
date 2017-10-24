import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    const {value} = this.props;
    return (
      <li>{value}</li>
    )
  }
}

//导出组件
export default ListItem;
