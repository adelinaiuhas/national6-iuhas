const images = document.getElementById("breed-image");
const pageNumber = document.getElementById("page-number");
let storedImage = [];

export function renderBreedImage(image) {
    var breedImagesObjects = Object.values(image);
    storedImage = breedImagesObjects[0];
    if (localStorage.index) images.src = storedImage[localStorage.index];
    else images.src = storedImage[0];
}

export function forward() {
    if (document.querySelector(".underlinedText")) {
        if (localStorage.index < storedImage.length - 1) {
            localStorage.index++;
        }
        pageNumber.innerText = "";
        pageNumber.innerText = parseInt(localStorage.index) + 1;
        images.src = storedImage[localStorage.index];
    }
}

export function backward() {
    if (document.querySelector(".underlinedText")) {
        if (localStorage.index >= 1) {
            localStorage.index--;
        }
        pageNumber.innerText = "";
        pageNumber.innerText = parseInt(localStorage.index) + 1;
        images.src = storedImage[localStorage.index];
    }
}
