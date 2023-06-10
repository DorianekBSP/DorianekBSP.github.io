
  const totalPhotos = 41;
  let currentPhoto = 1;

  function previousPhoto() {
  const photoNumberInput = document.getElementById("photoNumberInput");
    if (currentPhoto > 1) {
      currentPhoto--;
    }
    photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
    currentPhotoNumber.textContent = currentPhoto.toString();
}

  function nextPhoto() {
    const photoNumberInput = document.getElementById("photoNumberInput");
    const photoElement = document.getElementById('photo');
    if (currentPhoto < totalPhotos) {
      currentPhoto++;
    }
    photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
    currentPhotoNumber.textContent = currentPhoto.toString() + "/" + totalPhotos.toString();
  }

  function jumpToPhoto() {
    const photoElement = document.getElementById('photo');
    const photoNumber = parseInt(photoNumberInput.value);
    if (photoNumber >= 1 && photoNumber <= totalPhotos) {
      currentPhoto = photoNumber;
      photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
      currentPhotoNumber.textContent = currentPhoto.toString();
    }
  }
