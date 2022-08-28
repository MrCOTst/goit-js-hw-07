import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const cardSet = document.querySelector(".gallery");
const cardsMarkup = createImageCards(galleryItems);

cardSet.insertAdjacentHTML("beforeend", cardsMarkup);

function createImageCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
};

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
} );