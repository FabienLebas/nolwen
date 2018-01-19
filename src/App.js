import React, { Component } from 'react';
import './App.css';
import Today from './Today';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      leavingPressed: false
    }
  }

  leavingTime(){
    this.setState({
      leavingPressed: true
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">Nolwen</h1>
        </nav>
        <div className="jumbotron-fluid jumbotron">
          <button type="button" onClick={() => {this.leavingTime()}} className="btn btn-info">Départ de Nolwen</button>
        </div>
        <Today leavingPressed={this.state.leavingPressed} />
      </div>
    );
  }
}

export default App;
