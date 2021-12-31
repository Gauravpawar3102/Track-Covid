import React, { Component } from 'react';
import CountryData from './CountryData';
class Country extends Component {
  render() {
    return (
      <div>
        <select>
          <option disabled={true}>-- Select Country --</option>
          {CountryData.countryName.map((names) => (
            <option>{names.cName}</option>
          ))}{' '}
        </select>
        {/* <CountryData /> */}
      </div>
    );
  }
}

export default Country;
