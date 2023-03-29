import { galleryItems } from "./gallery-items.js";
// Change code below this line

const arrayOfGalleryElements = [];
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
  galleryLink.appendChild(galleryImg);
  galleryItem.appendChild(galleryLink);
  arrayOfGalleryElements.push(galleryItem);
}

const gallery = document.querySelector(".gallery");
gallery.append(...arrayOfGalleryElements);

new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
