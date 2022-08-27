import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const cardsMarkup = createImageCards(galleryItems);

gallery.insertAdjacentHTML("beforeend", cardsMarkup);

gallery.addEventListener("click", onGalleryItemClick);

function createImageCards(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link"
    href="${original}">
      <img class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function onGalleryItemClick(e) {
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  e.preventDefault();
//   console.log(e.target);

  const selectImageSrc = e.target.dataset.source;
  const instance = basicLightbox.create(`
<img class="modal__image" src="${selectImageSrc}"/>`);

  instance.show();

  const visible = instance.visible();

  console.log(visible);

  if (visible) {
    window.addEventListener("keydown", onEscPress);
  }
  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
