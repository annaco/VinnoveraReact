import React, { Component } from 'react';
import './Cross.css';

class Cross extends Component {
  render() {
    return (
      <div className="close">
        <div className="crossBox">
          <div className="cross">X</div>
        </div>
      </div>
    );
  }
}

export default Cross;
