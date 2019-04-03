import React, { Component } from 'react';
import FriendsList from './Components/Friends/FriendsList';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      friends:[]
    }
  }

  componentDidMount(){
    axios
    .get()
    .then()
    .catch()
  }

  render() {
    return (
      <div className="App">
        <FriendsList />
      </div>
    );
  }
}

export default App;
