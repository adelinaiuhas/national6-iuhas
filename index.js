console.log('JavaScript - DOM Manipulation - Homework');
/* 4. For task 1. In "index.js". You need to target the send button, by using "document.getElementById" function and add interaction on it at the click event. In the function linked to "click" event you must get a list of all the html element that have "input-field" css class. You must go trough each element in the list and check if its key ".value" has something or its empty. If the ".value" key of the input is empty you must add a css class that overwrites the border-color of the input to that specific element. Is important too not forget that you need to add the css class with its rule in the style.css file as well otherwise nothing visual will happen. To solve last part of this task, meaning our functionality needs to work every time the user clicks send, we need that all the inputs/textarea are with the original border color before checking if something is empty or not.

5. For task 2. There is a missing subcomponent, the one that has the "Message sent!". First you need to add it in html file as a part of the "contact-form" component. This component needs to be hidden by default. When clicking on send if all the fields are been filled we should add a css class on this component so that we can render it. This component should have small close button on which when clicked the css class responsible for rendering it should be removed.

My homework

const button = document.getElementById('send');
console.log(button);

button.addEventListener('click', buttonClick);

function buttonClick() {
    const inputField = document.getElementsByClassName('input-field');
    for (let i = 0; i < inputField.length; i++) {

        if (inputField[i].value === '') {
            inputField[i].classList.add('input-field-empty');
        } else {
            inputField[i].classList.remove('input-field-empty');
        }

    }
    var validMessage = document.querySelector('#all-fields-filled');
    const oneDiv = document.querySelector('.one');
    const twoDiv = document.querySelector('.two');
    const threeDiv = document.querySelector('.three');
    const fourDiv = document.querySelector('.four');
    if (oneDiv.value !== "" && twoDiv.value !== "" && threeDiv.value !== "" && fourDiv.value !== "") {
        validMessage.style.display = "block";

    } else {
        return false;
    }
}
*/

const inputList = document.getElementsByClassName("input-field");
const sendMessageRef = document.querySelector(".send-message");

document.getElementById('send').addEventListener("click", function() {
    let showSendMessage = true;
    for (const inputRef of inputList) {
        console.log(inputRef, inputRef.value);
        if(inputRef.value) {
            inputRef.classList.remove("input-field--invalid")
        } else {
            showSendMessage = false;
            inputRef.classList.add("input-field--invalid")
        }
    }
    if (showSendMessage) {
        sendMessageRef.classList.remove('send-message--hidden');
    }
});

document.getElementById('close-button').addEventListener("click", function() {
    sendMessageRef.classList.add('send-message--hidden');
})