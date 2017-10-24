import React, {Component} from 'react';
import ListItem from './ListItem'
class NumberList extends Component {
  render() {
    const numbers = [1,2,3,4,5];
    //把li单独为一个组件后，把key写在组件的内部而不是li啦！
    const listItems = numbers.map((number) => <ListItem key={number.toString()} value={number} />);
    return (
      <ul>{listItems}</ul>
    )
  }
}

//导出组件
export default NumberList;
