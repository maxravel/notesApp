console.log("frwerw");

const submitButton = document.querySelector("#submitB");
const taskText = document.querySelector("#taskT");

submitButton.addEventListener("click",logTask);

function logTask(){
    console.log(taskText.value);
}