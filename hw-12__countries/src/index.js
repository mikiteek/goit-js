import fetchCountries from "./js/fetchQuery";
import refs from "./js/refs"
const debounce = require("lodash.debounce");
import './css/styles.css';
import countryTemplate from "./template/country.hbs";

const debouncedInputQuery = debounce(event => {
  const query = event.target.value;
  fetchCountries(query)
    .then(countries => {
      if (countries.length > 10) {
        console.log("Input more information");
      }
      else if (countries.length == 1) {
        const markup = countryTemplate(...countries);
        refs.ul.insertAdjacentHTML("beforeend", markup);
        // console.log(...countries);
      }
      else {
        const countryNames = countries.map(country => country.name);
        console.log(countryNames);
      }
    });
}, 500);
refs.search.addEventListener("input", debouncedInputQuery);

