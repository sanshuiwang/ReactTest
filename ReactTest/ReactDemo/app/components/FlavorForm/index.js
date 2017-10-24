import React, {Component} from 'react';

class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(100, event.target.value);
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Your favorite flavor is:' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

//导出组件
export default FlavorForm;
