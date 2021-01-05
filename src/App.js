import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 24,
    currentLocation: 'all',
  }

  // updateEvents = (location, eventCount) => {
  //   const { currentLocation, numberOfEvents } = this.state;
  //   if (location) {
  //     getEvents().then((events) => {
  //       const locationEvents =
  //         location === 'all'
  //         ? events
  //         : events.filter((event) => event.location === location);
  //       const filteredEvents = locationEvents.slice(0, numberOfEvents);
  //       this.setState({
  //         events: filteredEvents,
  //         currentLocation: location,
  //       });
  //     });
  //   } else {
  //     getEvents().then((events) => {
  //       const locationEvents =
  //         currentLocation === 'all'
  //         ? events
  //         : events.filter((event) => event.location === currentLocation);
  //       const filteredEvents = locationEvents.slice(0, eventCount);
  //       this.setState({
  //         events: filteredEvents,
  //         numberOfEvents: eventCount,
  //       });
  //     });
  //   }
  // };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events: events, 
          locations: extractLocations(events)
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    if ( eventCount === undefined || 0 ){
      this.setState({ eventCount: 24 });
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0, this.state.eventCount)
        });
      });
    }

    if ( location === undefined ){
      location = 'all';
      this.setState({ eventCount });
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0, this.state.eventCount)
        });
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
