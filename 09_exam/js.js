const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");
const clearAllButton = document.getElementById("clearAll");
const taskForm = document.getElementById("taskForm");
let tasks = [];

addTaskButton.onclick = () => {
    saveTask();
};

clearAllButton.onclick = () => {
    clearAllTasks();
};

taskForm.onsubmit = (e) => {
    e.preventDefault();
};

function saveTask() {
    const task = taskInput.value.trim();

    if (task !== "") {
        tasks.push({ task: task, completed: false });
        addItemToList(task, tasks.length - 1);
        taskInput.value = "";
        updateTasksInLocalStorage();
    }
}

function loadTasks() {
    taskList.innerHTML = "";
    tasks = JSON.parse(localStorage.getItem("tasks-key")) || [];

    for (let i = 0; i < tasks.length; i++) {
        addItemToList(tasks[i].task, i, tasks[i].completed);
    }
}

function addItemToList(task, index, completed) {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";
    checkbox.checked = completed;
    checkbox.onchange = () => {
        tasks[index].completed = checkbox.checked;
        updateTasksInLocalStorage();
        updateTaskStyle(listItem, checkbox.checked);
    };

    listItem.appendChild(checkbox);
    const taskSpan = document.createElement("span");
    taskSpan.innerText = task;
    listItem.appendChild(taskSpan);

    updateTaskStyle(listItem, completed);
    taskList.appendChild(listItem);
}

function updateTasksInLocalStorage() {
    localStorage.setItem("tasks-key", JSON.stringify(tasks));
}

function updateTaskStyle(listItem, completed) {
    if (completed) {
        listItem.classList.add("completed");
    } else {
        listItem.classList.remove("completed");
    }
}

function clearAllTasks() {
    taskList.innerHTML = "";
    tasks = [];
    updateTasksInLocalStorage();
}

document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
});