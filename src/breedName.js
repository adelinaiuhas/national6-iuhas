import { getApiImageData } from "./utils/api";
import { renderBreedImage } from "./images";

const pageNumber = document.getElementById("page-number");

export function selectedBreed() {
    if (document.querySelector(".underlinedText")) document.querySelector(".underlinedText").classList.remove("underlinedText");
    localStorage.setItem("index", 0);
    pageNumber.innerText = "";
    pageNumber.innerText = parseInt(localStorage.index) + 1;
    localStorage.setItem("breed", this.id);
    let thisId = this.id;
    this.classList.add("underlinedText");
    getApiImageData(thisId, renderBreedImage);
}