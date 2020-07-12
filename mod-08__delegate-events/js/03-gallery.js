const refs = {
  gallery: document.querySelector(".js-gallery"),
  // тег куда будем рендерить большую картинку
  largeImage: document.querySelector(".js-large-image"),
};

refs.gallery.addEventListener("click", onGalleryClick)

function onGalleryClick(event) {
  //прекращаем дефолтное поведение ссылки, чтоб на другую страницу не переходило
  event.preventDefault();
  if (event.target.nodeName !== "IMG")
    return;

  setLargeImage(event.target);
}
function setLargeImage(imageRef) {

  const largeImageUrl = imageRef.dataset.source;
  refs.largeImage.src = largeImageUrl;
}
