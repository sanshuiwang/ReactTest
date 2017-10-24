import React, {Component} from 'react';
const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    // this.state = {
    //   temperature: ''
    // };
  }
  handleInputChange(e) {
    // this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const {scale, temperature} = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleInputChange}/>
      </fieldset>
    )
  }
}

//导出组件
export default TemperatureInput;
