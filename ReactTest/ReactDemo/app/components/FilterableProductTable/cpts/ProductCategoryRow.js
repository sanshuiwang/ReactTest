import React, {Component} from 'react';

class ProductCategoryRow extends Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    )
  }
}

//导出组件
export default ProductCategoryRow;
