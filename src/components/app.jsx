import React from 'react';

import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div className="app container">
      <div className="row">
        <CityList />
        <ActiveCity />
      </div>
    </div>
  );
};

export default App;
