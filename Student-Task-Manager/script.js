let tasks = JSON.parse(localStorage.getItem("studentTasks")) || [];

// Add Task
function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const priority = document.getElementById("priority");

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        date: taskDate.value,
        priority: priority.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";
    taskDate.value = "";
    priority.value = "Medium";

    displayTasks();
}

// Save Tasks
function saveTasks() {
    localStorage.setItem("studentTasks", JSON.stringify(tasks));
}

// Display Tasks
function displayTasks() {

    const taskList = document.getElementById("taskList");
    const searchText =
        document.getElementById("searchInput").value.toLowerCase();

    const filter =
        document.getElementById("filter").value;

    taskList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {

        const matchesSearch =
            task.name.toLowerCase().includes(searchText);

        let matchesFilter = true;

        if (filter === "Pending") {
            matchesFilter = !task.completed;
        }

        if (filter === "Completed") {
            matchesFilter = task.completed;
        }

        return matchesSearch && matchesFilter;
    });

    document.getElementById("emptyMessage").style.display =
        filteredTasks.length === 0 ? "block" : "none";

    filteredTasks.forEach(task => {

        const taskDiv = document.createElement("div");

        taskDiv.className =
            task.completed ? "task completed" : "task";

        let priorityClass = task.priority.toLowerCase();

        taskDiv.innerHTML = `
            <div class="task-info">

                <h3>${task.name}</h3>

                <p>
                    📅 Due Date:
                    ${task.date || "No date selected"}
                </p>

                <span class="priority ${priorityClass}">
                    ${task.priority} Priority
                </span>

            </div>

            <div class="task-buttons">

                <button
                    class="complete-btn"
                    onclick="toggleTask(${task.id})">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteTask(${task.id})">
                    Delete
                </button>

            </div>
        `;

        taskList.appendChild(taskDiv);
    });

    updateStatistics();
}

// Complete / Undo Task
function toggleTask(id) {

    tasks = tasks.map(task => {

        if (task.id === id) {
            task.completed = !task.completed;
        }

        return task;
    });

    saveTasks();
    displayTasks();
}

// Delete Task
function deleteTask(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this task?");

    if (!confirmDelete) {
        return;
    }

    tasks = tasks.filter(task => task.id !== id);

    saveTasks();
    displayTasks();
}

// Update Statistics
function updateStatistics() {

    const total = tasks.length;

    const completed =
        tasks.filter(task => task.completed).length;

    const pending = total - completed;

    document.getElementById("totalTasks").textContent = total;

    document.getElementById("completedTasks").textContent =
        completed;

    document.getElementById("pendingTasks").textContent =
        pending;
}

// Load tasks when page opens
displayTasks();