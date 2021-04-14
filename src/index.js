import { useJSONResponse } from "./breedList";
import { backward, forward } from "./images";
import { logout } from "./logout";
import { getApiListData } from "./utils/api";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
    window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", logout);

window.addEventListener("load", () => {
    getApiListData(useJSONResponse);
});

const buttonBackward = document.getElementById("backward");
const buttonForward = document.getElementById("forward");
buttonForward.addEventListener("click", forward);
buttonBackward.addEventListener("click", backward);