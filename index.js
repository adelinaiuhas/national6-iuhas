console.log("Javascript - Cookies & local storage");

console.log(document.cookie);

if(!localStorage.getItem("name") && !localStorage.getItem("password")) {
    window.location = "/login.html";
}


document.getElementById("log-out").addEventListener("click", () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    window.location = "/";
});