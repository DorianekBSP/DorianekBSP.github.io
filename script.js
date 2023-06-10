window.addEventListener('load', function() {
  const currentPhotoNumber = document.getElementById("currentPhotoNumber");
  const photoNumberInput = document.getElementById("photoNumberInput");
  const photoElement = document.getElementById('photo');
  const right = document.getElementById("right");
  const left = document.getElementById("left");
  const totalPhotos = 41;
  let currentPhoto = 1;

  function previousPhoto() {
    if (currentPhoto > 1) {
      currentPhoto--;
    }
    photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
    currentPhotoNumber.textContent = currentPhoto.toString();
}

  function nextPhoto() {
    if (currentPhoto < totalPhotos) {
      currentPhoto++;
    }
    photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
    currentPhotoNumber.textContent = currentPhoto.toString();
  }

  function jumpToPhoto() {
    const photoNumber = parseInt(photoNumberInput.value);
    if (photoNumber >= 1 && photoNumber <= totalPhotos) {
      currentPhoto = photoNumber;
      photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
      currentPhotoNumber.textContent = currentPhoto.toString();
    }
  }
  
  function setButtonHeight() {
    const size = photoElement.offsetHeight + "px"
    right.style.height = size;
    left.style.height = size;
  }
});
