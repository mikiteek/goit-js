import Siema from "siema";

const siema = new Siema({
  duration: 500,
});
console.log(siema);
const nextBtnRef = document.querySelector('.js-next');
const prevBtnRef = document.querySelector('.js-prev');

prevBtnRef.addEventListener('click', () => siema.prev());
nextBtnRef.addEventListener('click', () => siema.next());
