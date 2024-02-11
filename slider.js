let mainImages = document.querySelectorAll(".default .main-img img");
let thumbnails = document.querySelectorAll(".default .thumb-list div");
let lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
let lightboxThumbnails = document.querySelectorAll(".lightbox .thumb-list div");
let lightbox = document.querySelector(".lightbox");
let iconClose = document.querySelector(".icon-close");
let iconPrev = document.querySelector(".icon-prev");
let iconNext = document.querySelector(".icon-next");

let currentImageIndex = 0;

const changeImage = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImages[index].classList.add("active");
  thumbnails[index].classList.add("active");
  currentImageIndex = index;
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, mainImages, thumbnails);
  });
});

lightboxThumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, lightboxMainImages, lightboxThumbnails);
  });
});

mainImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(index, lightboxMainImages, lightboxThumbnails);
  });
});

iconPrev.addEventListener("click", () => {
  if (currentImageIndex <= 0) {
    changeImage(mainImages.length - 1, lightboxMainImages, lightboxThumbnails);
  } else {
    changeImage(currentImageIndex - 1, lightboxMainImages, lightboxThumbnails);
  }
});

iconNext.addEventListener("click", () => {
  if (currentImageIndex >= mainImages.length - 1) {
    changeImage(0, lightboxMainImages, lightboxThumbnails);
  } else {
    changeImage(currentImageIndex + 1, lightboxMainImages, lightboxThumbnails);
  }
});

iconClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
