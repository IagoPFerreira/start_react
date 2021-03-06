import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navegation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Navegation;