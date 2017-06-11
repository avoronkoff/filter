import React, { Component } from 'react';
import TableData from './TableData';
import MyData from './MyData.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableData list={MyData.data} />
      </div>
    );
  }
}

export default App;
