import React, { Component } from 'react';
import './App.css';
import City from './City.js';
import Cityinput from './Cityinput.js';
import Cross from './Cross.js';
import Logo from './Logo.js';
import Sun from './Sun.js';
import Plusicon from './Plusicon.js';

//import '../node_modules/font-awesome/css/font-awesome.min.css'; 
//import '../node_modules/@fortawesome/css/font-awesome.min.css'; 



class App extends Component {
  constructor() {
    super();
    this.handleData = this.handleData.bind(this);
    this.state = {
      value: ''
    };
  }

  handleData(data) {
    this.setState({
      value: data
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Logo />
        <div className="innerwrapper">
          <Cityinput city={this.handleData}/>
          <div className="weatherBox">
            <div className="weatherBox_icon">
              <Sun />
            </div>
            <div className="weatherBox_right">
              <Cross />
              <div className="city">
                {this.state.value}
              </div>
            </div>           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
