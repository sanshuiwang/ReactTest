import React, {Component} from 'react';

class ProductRow extends Component {
  render() {
    const name = this.props.product.stocked
      ? this.props.product.name
      : <span style={{
        color: 'red'
      }}>
        {this.props.product.name}
      </span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}

//导出组件
export default ProductRow;
