import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FaPlus from 'react-icons/lib/fa/plus';
import './Plusicon.css';
class Plusicon extends Component {
    
       
  render() {
    //var FontAwesome = require('react-fontawesome');

    return (
        <div className="plusicon">
          <FaPlus />
        </div>     
    );
  }
}

export default Plusicon;