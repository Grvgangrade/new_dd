import React, { Component } from 'react';
import './App.css';
import AdvancedFilters from './Components/AdvanceFilters/AdvanceFilter';
import ShotTypeFilter from './Components/ShotTypeFilter/ShotTypeFilter';
import PlayerFilter from './Components/PlayerFilter/PlayerFilter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <PlayerFilter /> 
        {/* <ShotTypeFilter /> */}
        <AdvancedFilters />
      </div>
    );
  }
}

export default App;
