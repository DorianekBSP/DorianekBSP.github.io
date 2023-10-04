const totalPhotos = 77;
let currentPhoto = 1;
let isEnglish = false;

function previousPhoto() {
  const photoNumberInput = document.getElementById("photoNumberInput");
  const photoElement = document.getElementById('photo');
    if (currentPhoto > 1) {
      currentPhoto--;
    }
    photoElement.src = `Photos/Photo (${currentPhoto}).JPG`;
    currentPhotoNumber.textContent = currentPhoto.toString() + "/" + totalPhotos.toString();
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
      currentPhotoNumber.textContent = currentPhoto.toString() + "/" + totalPhotos.toString();
	}
}

function loadButtonsSize() {
	document.getElementById("left").style.height = document.getElementById("photo").offsetHeight + "px";
	document.getElementById("right").style.height = document.getElementById("photo").offsetHeight + "px";
}
window.addEventListener('resize', loadButtonsSize);

function toggleLanguage() {
	isEnglish = !isEnglish;
	if (isEnglish) {
		document.getElementById("toggleLanguageButton").innerHTML = "Zamień na polski";
		document.getElementById("currentPhotoLabel").innerHTML = "Current photo: "
		document.getElementById("currentPhotoSpan").innerHTML = "Jump to photo: ";
		document.getElementById("jumpButton").innerHTML = "Jump";
	} else {
		document.getElementById("toggleLanguageButton").innerHTML = "Switch to English";
		document.getElementById("currentPhotoLabel").innerHTML = "Bieżące zdjęcie: ";
		document.getElementById("currentPhotoSpan").innerHTML = "Skocz do zdjęcia: ";
		document.getElementById("jumpButton").innerHTML = "Skocz";
	}
}