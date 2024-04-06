function main() {
	window.addEventListener('resize', function(event) {
			document.getElementById("smaller_link").style.height = document.getElementById("bigger_link").clientHeight + "px";
	});
	document.getElementById("smaller_link").style.height = document.getElementById("bigger_link").clientHeight + "px";
}

let firstPhoto = 0;
let lastPhoto = 0;
let currentPhoto = 0;
let shouldSkip = false;

function setNewRange(first, last) {
	firstPhoto = first;
	lastPhoto = last;
	currentPhoto = firstPhoto;
}

function previousPhoto() {
  const photoNumberInput = document.getElementById("photoNumberInput");
  const photoElement = document.getElementById('photo');
    if (currentPhoto > firstPhoto) {
      currentPhoto--;
    }
    photoElement.src = "../Photos/Photo (" + currentPhoto + ").JPG";
    currentPhotoNumber.textContent = firstPhoto + "/" + currentPhoto.toString() + "/" + lastPhoto.toString();
}
function nextPhoto() {
    const photoNumberInput = document.getElementById("photoNumberInput");
    const photoElement = document.getElementById('photo');
    if (currentPhoto < lastPhoto) {
      currentPhoto++;
    }
    photoElement.src = "../Photos/Photo (" + currentPhoto + ").JPG";
    currentPhotoNumber.textContent = firstPhoto + "/" + currentPhoto.toString() + "/" + lastPhoto.toString();
}
function jumpToPhoto() {
    const photoElement = document.getElementById('photo');
    const photoNumber = parseInt(photoNumberInput.value);
    if (photoNumber >= firstPhoto && photoNumber <= lastPhoto) {
      currentPhoto = photoNumber;
      photoElement.src = "../Photos/Photo (" + currentPhoto + ").JPG";
      currentPhotoNumber.textContent = firstPhoto + "/" + currentPhoto.toString() + "/" + lastPhoto.toString();
	}
}

function loadButtonsSize() {
	let previousSize = document.getElementById("photo").offsetHeight
	document.getElementById("left").style.height = document.getElementById("photo").offsetHeight + "px";
	document.getElementById("right").style.height = document.getElementById("photo").offsetHeight + "px";
	if (previousSize == document.getElementById("photo").offsetHeight) {
		setTimeout(loadButtonsSize);
	}
}
window.addEventListener('resize', loadButtonsSize);
function skipLoading() {
	shouldSkip = true;
	loadButtonsSize();
	document.getElementById("loadingScreen").style.display = "none";
	document.getElementById("displayItAfterLoading").style.display = "block";
}
function preloadImages(i, lastPhoto) {
	let img = new Image();
	img.src = "../Photos/Photo (" + [i] + ").JPG";
	img.onload = function() {
		document.getElementById("loadingLabel").innerHTML = "Ładowanie/Loading... (" + i + "/" + lastPhoto.toString() + ")";
		if (shouldSkip == false && i != lastPhoto) {
			preloadImages(i + 1, lastPhoto);
		} else {
			skipLoading();
		}
	}
}
function loadButtonsSizeAndLoadImages(first, last) {
	loadButtonsSize();
	setNewRange(first, last);
	preloadImages(firstPhoto, last);
}