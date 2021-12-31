import React, { useState } from 'react';

function Country() {
  const [countries, setCountries] = useState([]);
  const onChange = (e) => {
    console.log(e.target.value);
  };
  const createSelectItems = (e) => {
    fetch(
      'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host':
            'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
          'x-rapidapi-key':
            '2b66cc80femshb1df0e1e9c92c59p13ac85jsnfbf1187edcae',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setCountries(res);
      });
    let items = [];
    // console.log(data.map((countries) => countries.Country));
    // console.log(countries);
    countries.forEach((country) => {
      items.push(
        <option key={country.id} value={country.id}>
          {country.Country}
        </option>
      );
    });
    // console.log(items);
    return items;
  };
  return (
    <div>
      <label htmlFor="countries">select Country</label>
      <select onChange={onChange}>{createSelectItems()}</select>
    </div>
  );
}

export default Country;
