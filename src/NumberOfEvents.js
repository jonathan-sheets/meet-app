import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 24,
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value
    });

    if(value < 1 || value > 24) {
      this.setState({
        infoText: 'Please choose a number between 1 and 24'
      })
    } else {
      this.setState({
        infoText: ''
      })
    }
    this.props.updateEvents(null, value);
  };

  render() {
    return (
      <div className="number-of-events">
        <div className="error-alert">
        <ErrorAlert text={this.state.infoText} />
        </div>
        <h3 className="number-of-events-label">Number of Events To Display:</h3>
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