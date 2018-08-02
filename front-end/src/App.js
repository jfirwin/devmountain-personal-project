import React, { Component } from 'react';
import router from './Routes/router'
import './App.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class App extends Component {
  render() {
    return (
      <div>
        {router}
      </div>
    );
  }
}

export default App;
