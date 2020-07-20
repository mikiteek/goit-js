import * as basicLightbox from "basiclightbox";
import"basiclightbox/dist/basicLightbox.min.css";
import "./sass/styles.scss";
const openModalBtnRef = document.querySelector("button[data-open-modal]");

const modalTemplate = document.querySelector("#modal");

const instance = basicLightbox.create(modalTemplate, {
  onShow: (instance) => { // со стрелкой
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener("click", instance.close);
  },
  onClose(instance) { // без стрелки, без разницы в данном случае
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener("click", instance.close);
  },
});

openModalBtnRef.addEventListener("click", instance.show);

function getCloseModalBtnRef(parent) {
  return parent
    .element()
    .querySelector("button[data-close-modal]");
}
