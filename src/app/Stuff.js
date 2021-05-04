import React, { Component } from 'react';
import './Stuff.css';
import StuffItem from './StuffItem';

class Stuff extends Component {
  render() {
    const { stuff } = this.props;
    return (
      <ul className="Stuff">
        {stuff.map(stuff => (
          <StuffItem key={stuff.name} stuff={stuff}/>
        ))}
      </ul>
    );
  }
}

export default Stuff;