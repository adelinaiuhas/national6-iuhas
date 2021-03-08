console.log("JavaScript - AJAX"); // Javascript Object Notation

document.getElementById("get-data").addEventListener("click", function(){

console.log("before fetch");
fetch("https://simple-json-server-scit.herokuapp.com/posts")
.then(handleFetchResponse)
.then(useJSONResponse);
console.log("after fetch");
});

function handleFetchResponse(response) {
    console.log("response", response);
    return response.json();
}

function useJSONResponse(json) {
    console.log(json);
    renderArticles(json);
}

function renderArticles(articleList) {
    articleListHtml.innerText = "";
    for (const articleData of articleList) {
        console.log(articleData);
        renderArticle(articleData);
    }
}

const articleListHtml = document.querySelector(".article-list");

function renderArticle(articleData) {
    const article = document.createElement("div");
    const articleTitle = document.createElement("h3");
    const articleContent = document.createElement("p");

    article.appendChild(articleTitle);
    article.appendChild(articleContent);

    articleListHtml.appendChild(article);

    articleTitle.innerText = articleData.title;
    articleContent.innerText = articleData.content;

    postId = articleData.id;
    let urlData = "https://simple-json-server-scit.herokuapp.com/comments?postId=" + postId;
    fetch(urlData)
        .then(handleFetchResponses)
        .then(useJSONResponses);

    function handleFetchResponses(response) {
        console.log("response", response);
        return response.json();
    }        

    function useJSONResponses(json) {
        console.log(json);
        renderComments(json);
    }    

    function renderComments(commentsList) {
        for (const commentsData of commentsList) {
            console.log(commentsData);
            renderComment(commentsData);
        }
    }
    const containerComments = document.createElement("div");   
    function  renderComment(commentsData) {
     
    const post = document.createElement("div");
    const postUser = document.createElement("h4");
    const postUserComment = document.createElement("p");

    post.appendChild(postUser);
    post.appendChild(postUserComment);
    containerComments.appendChild(post);
    article.appendChild(containerComments);
    containerComments.className = "comments-list";
    post.className = "comment";
    post.style.paddingLeft = "20px";
    postUser.className = "comment-user";
    postUserComment.className = "comment-content";

    postUser.innerText = commentsData.username;
    postUserComment.innerText = commentsData.content;
    } 
}