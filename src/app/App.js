import { Component } from 'react';
import './App.css';
import React from 'react';
import Stuff from './Stuff.js';
import request from 'superagent';

const STUFF_API_URL = 'https://lab-06-app.herokuapp.com/api/berries';


class App extends Component {

  state = { 
    showing: false,
    stuff: [],
  }

  async fetchStuff() {
    const response = await request.get(STUFF_API_URL);
    this.setState({ stuff: response.body });
  }

  async componentDidMount() {
    this.fetchStuff();
  }

  render() {
    const { showing, stuff } = this.state;
    return (
      <div className="App">
  
        <h1>welcome to my room. please see my <button onClick={() => this.setState({ showing: !showing })}>stuff</button></h1>
        { showing
          ? <div><h3>in my room:</h3>
            <Stuff stuff={stuff}/>
          </div>
          : null
        }
      
      </div>
    );
  }

}

export default App;
