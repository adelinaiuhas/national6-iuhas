import { renderArticles } from "./article";
import { getApiPostData } from "./utils/api";

console.log("JavaScript - AJAX - CRUD - Homework - Solution"); 

document.getElementById("get-data").addEventListener("click", () => {
    getApiPostData(renderArticles);
});



