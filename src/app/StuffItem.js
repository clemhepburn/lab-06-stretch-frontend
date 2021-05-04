import React, { Component } from 'react';
import './StuffItem.css';

class StuffItem extends Component {
  render() {
    const { stuff } = this.props;

    return (
      <li className="StuffItem">
        <h2>{stuff.name}</h2>
      </li>
    );

  }
}

export default StuffItem;