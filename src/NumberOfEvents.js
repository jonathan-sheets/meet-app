import React, { Component } from 'react';
import { mockData } from './mock-data';

class NumberOfEvents extends Component {
  state = {
    // numberOfEvents: 24,
    query: undefined
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      query: value
    });
    this.props.updateEvents(undefined, value);
  };

  render() {
    let data = mockData;
    return (
      <div className="number-of-events">
        <label className="number-of-events-label">Number of Events To Display:</label>
          <input 
            type="number"
            className="events-number"
            value={this.state.query}
            onChange={this.handleInputChanged}
          >
          </input>
          <div className="render-events">
            { this.state.query === null ? data.length : data.slice(0, this.state.query).length}
          </div>

      </div>
    )
  }
}

export default NumberOfEvents;