import './sass/styles.scss';
import fetchQuery from './js/fetchQuery';
import refs from "./js/refs"
import LoadMoreBtn from "./js/components/load-more-btn";
import updateImagesMarkup from "./js/update-images-markup"

const loadMoreBtn = new LoadMoreBtn({
  selector: ".load-more",
  hidden: true,
});

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

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
  loadMoreBtn.disable();
  fetchQuery.fetchImages().then(images => {
    console.log(images);
    updateImagesMarkup(images);
    loadMoreBtn.show();
    loadMoreBtn.enable();
  });
}
function clearImages() {
  refs.imagesUl.innerHTML = '';
}
