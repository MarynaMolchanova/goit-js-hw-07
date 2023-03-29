import { galleryItems } from "./gallery-items.js";
// Change code below this line

const arrayOfGalleryElements = [];
for (const picture of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  basicLightbox.create(galleryLink);

  const galleryImg = document.createElement("img");
  galleryImg.classList.add("gallery__image");
  galleryImg.src = picture.preview;
  galleryImg.alt = picture.description;
  galleryImg.dataset.source = picture.original;
  galleryLink.appendChild(galleryImg);
  galleryItem.appendChild(galleryLink);
  arrayOfGalleryElements.push(galleryItem);
}

const gallery = document.querySelector("div.gallery");
gallery.append(...arrayOfGalleryElements);

let instance = {};

gallery.onclick = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();

  event.preventDefault();
};

document.addEventListener("keydown", (event) => {
  if (instance.visible() && event.code === "Escape") {
    instance.close();
  }
});
