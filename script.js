const photoElement = document.getElementById('photo');
const right = document.getElementById("right");
const left = document.getElementById("left");
const totalPhotos = 41;
let currentPhoto = 1;

function previousPhoto() {
  if (currentPhoto > 1) {
    currentPhoto--;
  }
  photoElement.src = "Photos/Photo (" + currentPhoto + ").JPG";
}
function nextPhoto() {
  if (currentPhoto < totalPhotos) {
    currentPhoto ++;
  }
  photoElement.src = "Photos/Photo (" + currentPhoto + ").JPG";
}
function setButtonHeight() {
  const size = photoElement.offsetHeight + "px"
  right.height = size
  left.height = size
}

window.addEventListener('resize', setButtonHeight);
window.addEventListener('DOMContentLoaded', setButtonHeight);
