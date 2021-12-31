const countryData = () => {
  fetch(
    'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host':
          'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
        'x-rapidapi-key': '2b66cc80femshb1df0e1e9c92c59p13ac85jsnfbf1187edcae',
      },
    }
  )
    .then((res) => res.json())
    .then(
      (results) => {
        let countryName = results.map((result) => result.Country);
        // console.log(results.map((result) => console.log(result.Country)));
        console.log(countryName);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.error(error);
      }
    );
  // console.log(countryName.map(cName=>(
  //     <li>{cName}</li>
  // ))
};
countryData();

export default countryData;
