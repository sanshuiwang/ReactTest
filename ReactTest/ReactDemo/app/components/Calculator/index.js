import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleChange.bind(this);
    this.state = {
      temperature: ''
    };
  }
  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  render() {
    const {temperature} = this.state;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange}/>
        <BoilingVerdict celsius={parseFloat(temperature)}/>
      </fieldset>
    )
  }
}

//导出组件
export default Calculator;
