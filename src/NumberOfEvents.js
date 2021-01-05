import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 24,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className="number-of-events">
        <label className="number-of-events-label">Maximum Number of Events To Display:</label>
          <input 
            type="number"
            className="events-number"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          >
          </input>

      </div>
    )
  }
}

export default NumberOfEvents;