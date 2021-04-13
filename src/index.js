import { getToDoData, updateUserData, createUserData } from "./utils/API";

console.log("To Do App");

const ADD_NEW_USER_URL = "https://simple-json-server-scit.herokuapp.com/todo";
const UPDATE_TO_USER_URL = "https://simple-json-server-scit.herokuapp.com/todo/aiuhas";
const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = true;

getToDoData(() => {
    console.log(json);
    if (json.id === "aiuhas") {
        todo = json.todo;
        userExist = true;
    }
});

document.getElementById("add-task-button").addEventListener("click", () => {
    if (userExist) {
        // update user data
        console.log("add task to todo list");
        const itemValue = inputTask.value;
        if (itemValue) {
            console.log(todo);
            todo.push({
                checked: false,
                item: itemValue,
            });
            updateUserData(todo, () => { });
        }
    } else {
        // update user to server
        const itemValue = inputTask.value;
        if (itemValue) {
            createUserData(itemValue, () => { });
        }
    }
});