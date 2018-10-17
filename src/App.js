import React, { Component } from 'react';
import store from './store';
import './App.css';
import {observer} from 'mobx-react';
@observer
class App extends Component {
  render() {
    return (
      <div className="App">
       {store.time.toLocaleTimeString()}
       <div>
       <button
       onClick={store.startClock()}
       >
         start
       </button>
       <button
       onClick={store.pauseClock()}
       >
         pause
       </button>
       </div>
      </div>
      
    );
  }
}

export default App;
