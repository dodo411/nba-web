import React, { Component } from 'react';
import '../styles/App.css'
import { Main } from './Main.js';
import { TopNavBar } from './TopNavBar';


class App extends Component {
  render() {
      return (
          <div className="App">
              <TopNavBar/>
              <Main/>
          </div>
      );
  }
}

export default App;
