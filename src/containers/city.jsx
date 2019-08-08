import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <li>{ this.props.name }</li>
    );
  }
}

export default City;
