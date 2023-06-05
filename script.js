const photoElement = document.getElementById('photo');
let currentPhoto = 1;
const totalPhotos = 41;

function previousPhoto() {
  if (currentPhoto > 1) {
    currentPhoto--;
  }
  updatePhoto();
}

function updatePhoto() {
  photoElement.src = "Photos/Photo (' + currentPhoto + ').JPG";
}

function nextPhoto() {
  if (currentPhoto < totalPhotos) {
    currentPhoto ++;
  }
  updatePhoto();
}
