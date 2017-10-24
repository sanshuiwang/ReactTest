import React, {Component} from 'react';
import DialogIm from './DialogIm';
class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = {
      login: ''
    };
  }
  handleChange(e) {
    this.setState({login: e.target.value});
  }

  handleSignUp() {
    alert(`Welcome abord --- ${this.state.login}`);
  }
  render() {
    return (
      <DialogIm title="Welcome" message="Thank you for visiting our spacecraft!">
        <input value={this.state.login} onChange={this.handleChange}/>
        <button onClick={this.handleSignUp}>
          Sign Me Up
        </button>
      </DialogIm>
    );
  }
}

export default SignUpDialog;
