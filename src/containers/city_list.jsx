import React, { Component } from 'react';

import City from './city.jsx';

const CityList = (props) => {
  return (
    <div className="cities">
      <ul className="list-group-item">
        {props.cities.map(city => <City name={city.name} address={city.address} slug={city.slug} />)}
      </ul>
    </div>
  );
}

export default CityList;
