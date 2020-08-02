import searchOpt from './search-options';
//https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы
// &per_page=12&key=твой_ключ
// let page = 1;

class FetchQuery {
  constructor() {
    this._page = 1;
    this._searchQuery = "";
    this._url = `${searchOpt.BASE_URL}?image_type=${searchOpt.IMAGE_TYPE}&orientation=${searchOpt.ORIENTATION}&q=${this.query}&page=${this.page}&per_page=${searchOpt.PER_PAGE}&key=${searchOpt.API_KEY}`;
  }
  search() {
    return fetch(this.url)
      .then(response => response.json)
      .then(({hits}) => {
        this.incrementPage();
        return hits;
      });
  }
  get url() {
    return this._url;
  }
  get page() {
    return this._page;
  }
  get query() {
    return this._searchQuery;
  }
  set query(value) {
    this._searchQuery = value;
  }
  resetPage() {
    this._page = 1;
  }
  incrementPage() {
    this._page += 1;
  }
}

export default FetchQuery;
