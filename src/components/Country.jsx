import React, { useState, useEffect } from 'react';

import axios from 'axios';

function Country() {
  const [countries, setCountries] = useState([]);
  const [cases, setCases] = useState(0);

  const casesHandler = (e) => {
    console.log(e.target.value);
    setCases(e.target.value);

    // const change = e.target.value;
  };
  // const recoveredHandler = (e) => {
  //   console.log(e.target.value);
  //   setCasesRecovered(e.target.key);

  //   // const change = e.target.value;
  // };

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

        setCases(response.data[0].TotalCases);
        console.log(response.data[0].TotalCases);

        // console.log(response.data.map((countries) => countries.id));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <label>Stats Overview</label>
      <select onChange={casesHandler}>
        {countries.map((country) => (
          <option key={country.id} value={country.TotalCases}>
            {country.Country}
          </option>
        ))}
      </select>

      <div className="data-container">
        <h1 onChange={casesHandler}>total cases :{cases}</h1>
      </div>
    </div>
  );
}
export default Country;

//  {
//    countries.map((country) => (
//      <option key={country.id}>{country.Country}</option>
//    ));
//  }
