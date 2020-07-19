import createBox from "./js/create-box";
import {add} from "./js/calc";
import * as calc from "./js/calc";
import './styles.scss';

document.body.appendChild(createBox("Webpack is amazing"));

console.log(add);
console.log(calc);
console.log(calc.add);
