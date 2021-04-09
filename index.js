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
}

function renderBreedNames(breedList) {
  for (const breedName of breedList) {
    renderBreedName(breedName);
  }
}

function renderBreedName(breedName, e) {
  const breed = document.createElement("p");
  allBreeds.appendChild(breed);
  breed.innerText = breedName;
  breed.classList.add("breedName");
  breed.addEventListener ("click", function(e) {
    var p = e.target.parentElement;
    var index = Array.prototype.indexOf.call(p.children, e.target);
    var dogBreed = p.children[index].innerText;
    this.classList.add("underlinedText");
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images`)
    .then((r) => r.json())
    .then((json) => useJSONResponseImage(json));
    
    
    function useJSONResponseImage(json) {
      var breedImagesObjects = Object.values(json);
      var breedImageObject = breedImagesObjects[0];
      renderBreedImages(breedImageObject);
  
    }

    function renderBreedImages (image){
      const imageBreed = document.createElement("img");
      images.appendChild(imageBreed);
      imageBreed.src = image[0];
    }
  });

}


    

//     console.log(abc.length);
//     // for (var index = 0; index < abc.length; index++) {
//     //   abc[index].addEventListener("click", function() {
//     //     (document.querySelector('.underlinedText')) ? document.querySelector('.underlinedText').classList.remove('underlinedText') : '';
//     //     this.classList.add('underlinedText');
//     //   });
//     // } 
    



  










