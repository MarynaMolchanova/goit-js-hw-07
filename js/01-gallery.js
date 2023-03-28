import { galleryItems } from "./gallery-items.js";
// Change code below this line

const arrElemGallery = [];
for (const picture of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  basicLightbox.create(galleryLink);

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

const gallery = document.querySelector("div.gallery");

gallery.append(...arrElemGallery);

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
