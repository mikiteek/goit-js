import './sass/styles.scss';
import fetchQuery from './js/fetchQuery';
import refs from "./js/refs"
// import LoadMoreBtn from "./js/components/load-more-btn";
const throttle = require("lodash.throttle");
import updateImagesMarkup from "./js/update-images-markup"

// const loadMoreBtn = new LoadMoreBtn({
//   selector: ".load-more",
//   hidden: true,
// });

const throttleLoadMore = throttle(loadMore, 500);
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
window.addEventListener("scroll", throttleLoadMore);
// loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
  event.preventDefault();
  const form = event.currentTarget;
  fetchQuery.query = form.elements.query.value;

  clearImages();
  fetchQuery.resetPage();
  fetchImages();
  form.reset();
}
function fetchImages() {
  // loadMoreBtn.disable();
  fetchQuery.fetchImages().then(images => {
    console.log(images);
    updateImagesMarkup(images);
    // loadMoreBtn.show();
    // loadMoreBtn.enable();
    windowSchrollTo();
  });
}
function clearImages() {
  refs.imagesUl.innerHTML = '';
}

function loadMore() {
  const images = refs.imagesUl;
  if(window.pageYOffset + window.innerHeight >= images.offsetHeight) {
    fetchImages();
  }
}
function windowSchrollTo() {
  window.scrollTo({
    top: document.documentElement.offsetHeight - 320,
    behavior: "smooth"
  })
}
