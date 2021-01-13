import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#0c23ff';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ff5C00';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
      this.color = '#ff0018';
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };