
let showTaskHistory = [];
let dayRoutine = ["breakfast", "going to work", "going to gym", "go back home"];
let timeForIt = [7, 8, 18, 20];

let showProduct = () => {
    console.clear();
    console.table(showTaskHistory);
};


let showTask = () => {
    showProduct();
};


let addNewRoutine = () => {
    let newRoutine = prompt("Enter your task: " + dayRoutine.join(", "));
    let theTime = +prompt("Enter the time: " + timeForIt.join(", "));

    let task = {
        name: newRoutine,
        time: theTime,
        status: "Not Done",
    };

    showTaskHistory.push(task);
    console.log("Task Added Successfully!");
    showProduct();
};


let deleteRoutine = () => {
    let delIndex = +prompt("Enter the index of task to delete :");

    if (delIndex >= 0 && delIndex < showTaskHistory.length) {
        console.log("Task Deleted: ", showTaskHistory[delIndex]);
        showTaskHistory.splice(delIndex, 1);
    } else {
        console.log("Invalid index.");
    }
    showProduct();
};


let doneRoutine = () => {
    let doneIndex = +prompt("Enter the index of task to mark as done:") ;

    if (doneIndex >= 0 && doneIndex < showTaskHistory.length) {
        showTaskHistory[doneIndex].status = "Done";
        console.log("Task marked as Done: ", showTaskHistory[doneIndex]);
    } else {
        console.log("Invalid index.");
    }
    showProduct();
};