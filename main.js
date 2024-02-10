let mainImages = document.querySelectorAll('.default .main-img img');
let thumbnails = document.querySelectorAll('.default .thumb-list div');
let lightboxMainImages = document.querySelectorAll('.lightbox .main-img img');
let lightboxThumbnails = document.querySelectorAll('.lightbox .thumb-list div');

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () =>{
        changeImage(index, mainImages, thumbnails)
    })
})

lightboxThumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () =>{
        changeImage(index, lightboxMainImages, lightboxThumbnails)
    })
})

const changeImage = (index, mainImages, thumbnails) => {
    mainImages.forEach((img) => {
      img.classList.remove('active');
    });
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active');
    });

    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
  }