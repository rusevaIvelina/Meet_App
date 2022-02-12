import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all"
  }

    componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events) 
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events
      : events.filter((event) => event.location === location);
      if(this.mounted) {
        this.setState({
        events: locationEvents.slice(0, eventCount),
        location: location,
        currentLocation: location
       });
      }
     });    
    };

  updateNumberOfEvents = async (e) => {
    const newNumber = e.target.value ? parseInt(e.target.value) : 32;

    if(newNumber < 1 || newNumber > 32) {
      await this.setState({ 
        numberOfEvents: newNumber,
        errorText: 'Please choose a number between 1 and 32' 
    });
    } else {
      await this.setState({
        errorText:'',
        numberOfEvents: newNumber
      });
      this.updateEvents(this.state.currentLocation, this.state.numberOfEvents);
    } 
  };


  render() {
    return (
      <div className="App">
        <h1 className='page-title'> Meet App </h1>
        <CitySearch locations={this.state.locations} 
          updateEvents={this.updateEvents} />
          <NumberOfEvents numberOfEvents={this.state.numberOfEvents} 
          updateNumberOfEvents={this.updateNumberOfEvents}
          errorText = {this.state.errorText}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;
