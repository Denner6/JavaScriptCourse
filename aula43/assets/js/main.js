function main() {
    const inputTask = document.querySelector("[data-input-task]");
    const taskButton = document.querySelector("[data-btn-add-task]");
    const tasks = document.querySelector("[data-tasks]");
    const tasksList = [];
    const createLi = () => document.createElement("li");
    const createSpan = (text) => {
        const spanElement = document.createElement("span");
        spanElement.innerText = text + " ";
        tasksList.push(spanElement.innerText);
        return spanElement;
    };
    
    const createClearButton = (li) => {
        const clearButton = document.createElement("button");
        clearButton.innerText = "Delete";
        clearButton.setAttribute("data-clear-button", "");
        clearButton.setAttribute("title", "Delete this task");
        li.appendChild(clearButton);
    }
    
    function createTask(inputText) {
        const liElement = createLi();
        const spanElement = createSpan(inputText);
        liElement.appendChild(spanElement);
        tasks.appendChild(liElement);
        clearInput();
        createClearButton(liElement);
        saveTasks();
    }

    inputTask.addEventListener("keypress", (event) => {
        if (!inputTask.value) return;
        if (event.keyCode === 13) createTask(inputTask.value);
    });

    function clearInput() {
        inputTask.value = "";
        inputTask.focus();
    }

    taskButton.addEventListener("click", () => {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    });

    document.addEventListener("click", (event) => {
        const element = event.target;
        if (element.hasAttribute("data-clear-button")) {
            const index = (element.parentElement.querySelector("span")).innerText;
            index !== -1 ? tasksList.splice(index, 1) : {}
            element.parentElement.remove();
            saveTasks();
        }
    }); 

    function saveTasks() {
        const tasksJSON = JSON.stringify(tasksList);
        localStorage.setItem("tasks", tasksJSON);
    }

    function addSavedTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks"));
        for (let task of tasks) {
            createTask(task);
        }
    }
    addSavedTasks();
}

main();