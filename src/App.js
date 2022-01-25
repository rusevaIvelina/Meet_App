import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }
  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents}/>
      </div>
    );
  }
}

export default App;
