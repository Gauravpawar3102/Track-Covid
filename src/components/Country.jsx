import React, { Component } from 'react';
// import { countryName } from './CountryData';
import getData from './CountryData';
class Country extends Component {
  render() {
    return (
      <div>
        <select>
          <option value="global">Global</option>
          <option value="global">Global</option>
        </select>
        {/* <countryData /> */}
      </div>
    );
  }
}

export default Country;
