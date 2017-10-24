import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';
import {tryConvert} from './funcs';
import BoilingVerdict from './BoilingVerdict';
class Calculator02 extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChage = this.handleFahrenheitChage.bind(this);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }
  handleFahrenheitChage(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const {scale, temperature} = this.state;
    const celsius = scale === 'f'
      ? tryConvert(temperature, scale)
      : temperature;
    const fahrenheit = scale === 'c'
      ? tryConvert(temperature, scale)
      : temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChage}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

//导出组件
export default Calculator02;
