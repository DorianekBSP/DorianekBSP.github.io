const photoElement = document.getElementById('photo');
const totalPhotos = 41;
let currentPhoto = 1;

document.getElementById("left").style.height = photoElement.offsetHeight + "px";
document.getElementById("right").style.height = photoElement.offsetHeight + "px";

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
