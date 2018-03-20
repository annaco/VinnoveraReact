import React, { Component } from 'react';

import City from './City.js';
import Plusicon from './Plusicon.js';
import './Cityinput.css';

class Cityinput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.city(this.state.value);

    this.setState({
      value: ''
    });
   
  }

  render() {
    return (
      <div className="locationBox">
      <div className="locationBox_text">How´s the weather in...</div>
        <form class="inputBox">
          <label>
            <div className="inputBox_text">Location:</div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <div className="addImage" onClick={this.handleSubmit}>
              <Plusicon />
            </div>
          </label>
        </form>    
      </div>
    );
  }
}


export default Cityinput;