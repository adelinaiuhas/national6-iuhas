import { selectedBreed } from "./breedName";
import { getApiImagesData } from "./utils/api";
import { renderBreedImage } from "./images";

const allBreeds = document.getElementById("breeds");
const pageNumber = document.getElementById("page-number");

export function useJSONResponse(json) {
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
        let localStorageBreed = localStorage.breed;
        getApiImagesData(localStorageBreed, renderBreedImage);
    }
}

function renderBreedName(breedName) {
    const breed = document.createElement("p");
    allBreeds.appendChild(breed);
    breed.innerText = breedName;
    breed.setAttribute("id", breedName);
    breed.addEventListener("click", selectedBreed);
}

