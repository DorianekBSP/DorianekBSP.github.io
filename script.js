const photoElement = document.getElementById('photo');
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

alert(document.getElementById("photo").offsetHeight;
