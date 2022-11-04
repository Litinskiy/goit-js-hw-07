import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector(`.gallery`);
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join(``);
};
galleryContainerRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainerRef.addEventListener(`click`, onModalOpen);

function onModalOpen(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }

    const galleryModal = basicLightbox.create(`
<img width="800" height="600" src="${event.target.dataset.source}"/>`);
    galleryModal.show();
    window.addEventListener("keydown", onCloseBtn);
    function onCloseBtn(event) {
        if (event.code === "Escape") {
            galleryModal.close();
            window.removeEventListener("keydown", onCloseBtn);
        }
    }

}
console.log(galleryItems);

