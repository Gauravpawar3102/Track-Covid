import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/country.css';

function Country() {
  const [countries, setCountries] = useState([]);
  const [cases, setCases] = useState(`0, 0, 0`);

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

        // setCases(response.data[0].TotalCases);
        // console.log(response.data[0].TotalCases);

        // console.log(response.data.map((countries) => countries.id));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div className="databox">
      <div className="country">
        <h4>Select Country to See Data</h4>

        <h3>Stats Overview</h3>
        <select onChange={casesHandler}>
          {countries.map((country) => (
            <option
              key={country.id}
              value={[
                country.TotalCases,
                country.TotalRecovered,
                country.TotalDeaths,
              ]}
            >
              {country.Country}
            </option>
          ))}
        </select>
      </div>
      <div className="data-country-container">
        <h1 onChange={casesHandler}>Total Cases ,TotalRecovered,TotalDeaths</h1>
        <h1>{cases}</h1>
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
