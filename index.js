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
window.addEventListener("load", getData);

function getData() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((json) => useJSONResponse(json));
}

function useJSONResponse(json) {
  var breedNamesObjects = Object.values(json);
  console.log(breedNamesObjects[0]);
  var breedNamesObject = breedNamesObjects[0];
  var breedListArray = Object.keys(breedNamesObject);
  console.log(breedListArray);
  renderBreedNames(breedListArray);
}

function renderBreedNames(breedList) {

  for (const breedName of breedList) {
    console.log(breedName);
    renderBreedName(breedName);
  }
}

function renderBreedName(breedName) {
  const breed = document.createElement("p");
  allBreeds.appendChild(breed);
  breed.innerHTML = breedName;
}