import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setActiveCity } from '../actions';

class City extends Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    let cityClasses = "list-group-item";
    if (this.props.city === this.props.activeCity) {
      cityClasses += " selected";
    }
    return (
      <li className={cityClasses} onClick={this.handleClick}>{ this.props.city.name }</li>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
