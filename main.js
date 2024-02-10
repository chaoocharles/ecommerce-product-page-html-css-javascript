var mainImages = document.querySelectorAll('.main-img img');
var thumbnails = document.querySelectorAll('.thumb-list div');

thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () =>{
        changeImage(index)
    })
})

const changeImage = (index) => {
    mainImages.forEach((img) => {
      img.classList.remove('active');
    });
    thumbnails.forEach((thumb) => {
      thumb.classList.remove('active');
    });

    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
  }