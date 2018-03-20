import React, { Component } from 'react';
import './Logo.css';
import logga from './image/blacklogga.png';


class Logo extends Component {
  render() {
    return (
    <div className="LogoBox">  
      <div className="logga">
       <img src={logga} alt="logga" />
      </div>
      <div className="Logo">
        Vinnovera
      </div> 
    </div>
    );
   
  }
}

export default Logo;