import fetchCountries from "./js/fetchQuery";
import refs from "./js/refs"
const debounce = require("lodash.debounce");
import './css/styles.css';

//  const searchCountries = refs.search.addEventListener("input", event => {
//   const query = event.target.value;
//    fetchCountries(query);
// });
_.debounce(() => {
  refs.search.addEventListener("input", event => {
    const query = event.target.value;
    fetchCountries(query);
  });
}, 500);

//usa
//russia
//ukraine
