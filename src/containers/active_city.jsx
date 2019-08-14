import React from 'react';

import { connect } from 'react-redux';

const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (<p>Please select a city</p>);
  }

  const src = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

  return (
    <div className="active-city">
      <h3>{props.activeCity.name}</h3>
      <address>{props.activeCity.address}</address>
      <img src={src} alt="selected city" />
    </div>
  );
};

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
