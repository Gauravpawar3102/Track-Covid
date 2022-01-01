import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Country() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
      headers: {
        'x-rapidapi-host':
          'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': '2b66cc80femshb1df0e1e9c92c59p13ac85jsnfbf1187edcae',
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCountries(response.data);
        // console.log(response.data.map((countries) => countries.id));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <label>select Country</label>
      <select>
        {countries.map((country) => (
          <option key={country.id} value={country.id}>
            {country.Country}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Country;

//  {
//    countries.map((country) => (
//      <option key={country.id}>{country.Country}</option>
//    ));
//  }
