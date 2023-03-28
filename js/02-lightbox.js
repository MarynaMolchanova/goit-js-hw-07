import { galleryItems } from "./gallery-items.js";
// Change code below this line

const arrElemGallery = [];
for (const picture of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");

  galleryLink.href = picture.original;

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = picture.preview;
  galleryImg.alt = picture.description;
  galleryImg.dataset.source = picture.original;
  galleryImg.dataset.type = "image";
  galleryItem.appendChild(galleryLink);
  galleryLink.appendChild(galleryImg);
  arrElemGallery.push(galleryLink);
}

const gallery = document.querySelector(".gallery");
gallery.append(...arrElemGallery);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
