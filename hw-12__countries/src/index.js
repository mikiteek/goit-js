import './css/styles.css';


fetch("https://restcountries.eu/rest/v2/name/uk")
  .then(res => res.json())
  .then( countries  => console.log(countries));