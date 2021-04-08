console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const allBreeds = document.getElementById("breeds");
const images = document.getElementById("images-container");
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
  useIndexOf(breedListArray)
}

function renderBreedNames(breedList) {
  for (const breedName of breedList) {
    renderBreedName(breedName);
  }
}

function renderBreedName(breedName) {
  const breed = document.createElement("p");
  allBreeds.appendChild(breed);
  breed.innerText = breedName;
  breed.classList.add("breedName");
}

var xParagraph = document.getElementsByClassName("BreedName");
function useIndexOf(breedList){
  var x = breedList;
  
  allBreeds.addEventListener("click", function(e) {
    
    var p = e.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, e.target);
    console.log(index);
    
    e.target.classList.add("underlinedText");
    
    fetch(`https://dog.ceo/api/breed/${x[index]}/images`)
    .then((response) => response.json())
    .then((json) => useJSONResponseImage(json));
    
    
    function useJSONResponseImage() {
      
    }
  });

  

  
}









