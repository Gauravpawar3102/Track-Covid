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
//  {
//    countries.map((country) => (
//      <option key={country.id}>{country.Country}</option>
//    ));
//  }
export default Country;

//before //
// function Country() {
//   const [countries, setCountries] = useState([]);
//   const onChange = (e) => {
//     console.log(e.target.value);
//   };
//   const createSelectItems = (e) => {
//     fetch(
//       'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
//       {
//         method: 'GET',
//         headers: {
//           'x-rapidapi-host':
//             'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
//           'x-rapidapi-key':
//             '2b66cc80femshb1df0e1e9c92c59p13ac85jsnfbf1187edcae',
//         },
//       }
//     )
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         // console.log(res);
//         setCountries(res);
//       });
//     const items = [];
//     // console.log(data.map((countries) => countries.Country));
//     // console.log(countries);
//     countries.forEach((country) => {
//       items.push(
//         <option key={country.id} value={country.id}>
//           {country.Country}
//         </option>
//       );
//     });
//     // console.log(items);
//     return items;
//   };
//   return (
//     <div>
//       <label htmlFor="countries">select Country</label>
//       <select onChange={onChange}>{createSelectItems}</select>
//     </div>
//   );
// }

// export default Country;
