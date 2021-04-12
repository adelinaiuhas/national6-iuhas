console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("index");
  localStorage.removeItem("breed");
  window.location = "/";
});



const allBreeds = document.getElementById("breeds");
const images = document.getElementById("breed-image");
const buttonBackward = document.getElementById("backward");
const buttonForward = document.getElementById("forward");
const pageNumber = document.getElementById("page-number");

window.addEventListener("load", getData);
function getData() {
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((json) => useJSONResponse(json));
}

function useJSONResponse(json) {
  var breedNamesObjects = Object.values(json);
  var breedNamesObject = breedNamesObjects[0];
  var breedListArray = Object.keys(breedNamesObject);
  renderBreedNames(breedListArray);
}

function renderBreedNames(breedList) {
  for (const breedName of breedList) {
    renderBreedName(breedName);
  }
  if (localStorage.breed && localStorage.index) {
    document.getElementById(localStorage.breed).classList.add("underlinedText");
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    fetch(`https://dog.ceo/api/breed/${localStorage.breed}/images`)
      .then((response) => response.json())
      .then(renderBreedImage)
  }
}

function renderBreedName(breedName) {
  const breed = document.createElement("p");
  allBreeds.appendChild(breed);
  breed.innerText = breedName;
  breed.setAttribute("id", breedName);
  breed.addEventListener("click", selectedBreed);
}

function selectedBreed() {
  if (document.querySelector(".underlinedText")) document.querySelector(".underlinedText").classList.remove("underlinedText");
  localStorage.setItem("index", 0);
  pageNumber.innerText = "";
  pageNumber.innerText = parseInt(localStorage.index) + 1;
  localStorage.setItem("breed", this.id);
  this.classList.add("underlinedText");
  fetch(`https://dog.ceo/api/breed/${this.id}/images`)
    .then((r) => r.json())
    .then(renderBreedImage);
}

let storedImage = [];

function renderBreedImage(image) {
  var breedImagesObjects = Object.values(image);
  storedImage = breedImagesObjects[0];
  if (localStorage.index) images.src = storedImage[localStorage.index];
  else images.src = storedImage[0];
}

buttonForward.addEventListener("click", function () {
  if (document.querySelector(".underlinedText")) {
    if (localStorage.index < storedImage.length-1) {
      localStorage.index++;
    }
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    images.src = storedImage[localStorage.index];
  }
});

buttonBackward.addEventListener("click", function () {
  if(document.querySelector(".underlinedText")) {
    if (localStorage.index >= 1) {
      localStorage.index--;
    }
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    images.src = storedImage[localStorage.index];
  }
});
