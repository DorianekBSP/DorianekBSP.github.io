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

var object1 = document.
var heightObject1 = object1.offsetHeight;
document.querySelector('.object2').style.height = heightObject1 + 'px';
