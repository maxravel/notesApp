console.log("frwerw");

const submitButton = document.querySelector("#submitB");
const taskText = document.querySelector("#taskT");
const taskArea = document.querySelector("#taskA");

submitButton.addEventListener("click",logTask);

function logTask(){
    console.log(taskText.value);
    let newTask = document.createElement("div");
    newTask.textContent = taskText.value;
    newTask.style.border = "1px solid black";
    let removeTaskButton = document.createElement("div");
    removeTaskButton.style.backgroundColor = "red";
    removeTaskButton.style.height = "15px";
    removeTaskButton.style.width = "15px";
    removeTaskButton.style.borderRadius = "50%";
    removeTaskButton.classList.add("delete");
    // removeTaskButton.style.position = "relative";
    // removeTaskButton.style.left = "10px";
    removeTaskButton.style.float = "right";
    newTask.appendChild(removeTaskButton);
    taskArea.appendChild(newTask);

}

taskArea.addEventListener("click", removeTask);

function removeTask(e){
    if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
    }
}