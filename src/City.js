import React, { Component } from 'react';
//import Cityinput from './Cityinput.js';
import './City.css';



class City extends Component {
    const = this.props.cityName;
       
  render() {
     

    return (
        <div className="city">
          {this.props.cityName}
        </div>     
    );
  }
}

export default City;