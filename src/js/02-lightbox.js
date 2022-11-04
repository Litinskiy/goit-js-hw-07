import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(`.gallery`);

function galleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        alt="${description}"
    />
  </a>
</div>`;
    }).join(``);
};

galleryRef.innerHTML = galleryMarkup(galleryItems);

let galleryModal = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});

console.log(galleryItems);

