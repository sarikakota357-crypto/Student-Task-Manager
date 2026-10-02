# 📚 Student Task Manager

A simple and user-friendly **Student Task Manager** web application developed using **HTML, CSS, and JavaScript**. It helps students organize their daily academic tasks, track their progress, and manage pending and completed tasks efficiently.

## 📌 Project Overview

Students often have multiple assignments, projects, exams, and other activities to manage. The Student Task Manager provides a simple digital solution for organizing these tasks.

Users can add tasks with a due date and priority, mark tasks as completed, search for tasks, filter tasks, and delete tasks when they are no longer required.

The application uses **Browser Local Storage** to save tasks, so the tasks remain available even after refreshing the webpage.

---

## ✨ Features

* ➕ Add new tasks
* 📅 Set a due date for tasks
* 🔴 Set task priority

  * High
  * Medium
  * Low
* ✅ Mark tasks as completed
* ↩️ Undo completed tasks
* 🗑️ Delete tasks
* 🔍 Search tasks
* 📋 Filter tasks

  * All Tasks
  * Pending
  * Completed
* 📊 Display task statistics

  * Total Tasks
  * Pending Tasks
  * Completed Tasks
* 💾 Save tasks using Local Storage
* 📱 Responsive design for different screen sizes

---

## 🛠️ Technologies Used

| Technology    | Purpose                                |
| ------------- | -------------------------------------- |
| HTML5         | Creates the structure of the webpage   |
| CSS3          | Provides styling and responsive design |
| JavaScript    | Provides application functionality     |
| Local Storage | Stores task data in the browser        |

---

## 📂 Project Structure

```text
Student-Task-Manager/
│
├── index.html
├── README.md
├── script.js
└── style.css
```

### File Description

**index.html**

Contains the structure of the Student Task Manager, including the task form, buttons, search box, filters, statistics, and task list.

**style.css**

Contains all the styling for the application, including layout, colors, buttons, task cards, priority labels, and responsive design.

**script.js**

Contains the main functionality of the application, including adding, displaying, searching, filtering, completing, deleting, and storing tasks.

**README.md**

Contains the documentation and information about the project.

---

## 🚀 How to Run the Project

### Step 1: Download or Clone the Project

Download the project folder to your computer.

### Step 2: Open the Project

Open the `Student-Task-Manager` folder in **Visual Studio Code**.

### Step 3: Check the Files

Make sure the folder contains:

```text
index.html
README.md
script.js
style.css
```

### Step 4: Run the Application

Open `index.html` in a web browser.

Alternatively, if you have the **Live Server** extension in VS Code:

1. Right-click `index.html`
2. Select **Open with Live Server**
3. The application will open in your browser.

---

## 🖥️ How to Use

### 1. Add a Task

Enter the task name in the input field.

Example:

```text
Complete Java Assignment
```

Select a due date and priority, then click **Add Task**.

### 2. Complete a Task

Click the **Complete** button beside a task.

The task will be marked as completed.

### 3. Undo a Task

Click the **Undo** button to change a completed task back to pending.

### 4. Delete a Task

Click the **Delete** button to remove a task.

### 5. Search Tasks

Enter a task name in the search box to find a specific task.

### 6. Filter Tasks

Use the filter dropdown to display:

* All Tasks
* Pending Tasks
* Completed Tasks

---

## 💾 Local Storage

The project uses the browser's **Local Storage** to save task information.

Tasks are converted into JSON format before being stored.

Example:

```javascript
localStorage.setItem(
    "studentTasks",
    JSON.stringify(tasks)
);
```

When the application starts, the stored tasks are retrieved using:

```javascript
JSON.parse(
    localStorage.getItem("studentTasks")
);
```

This allows tasks to remain available even after refreshing the page.

---

## 📊 Project Statistics

The application automatically calculates:

```text
Total Tasks
Pending Tasks
Completed Tasks
```

These values are updated whenever a task is added, completed, undone, or deleted.

---

## 📱 Responsive Design

The application is designed to work on different screen sizes, including:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile devices
* 📱 Tablets

CSS media queries are used to adjust the layout for smaller screens.

---

## 🔮 Future Enhancements

The project can be improved in the future by adding:

* 👤 User registration and login
* 🗄️ Database integration
* ☁️ Cloud data storage
* 🔔 Task reminders and notifications
* 📧 Email reminders
* 📅 Calendar integration
* 🌙 Dark mode
* 📈 Advanced task statistics
* 🔐 User authentication
* 🌐 Backend server

---

## ⚠️ Current Limitations

* The application does not currently use a server-side database.
* Tasks are stored only in the browser's Local Storage.
* The application is mainly designed for a single browser user.
* Tasks cannot currently be synchronized between different devices.

---

## 🎯 Learning Outcomes

Through this project, the following concepts were practiced:

* HTML page structure
* CSS styling
* Responsive web design
* JavaScript functions
* JavaScript arrays and objects
* DOM manipulation
* Event handling
* Array methods such as `filter()` and `map()`
* JSON data handling
* Browser Local Storage
* Basic web application development

---

## 👩‍💻 Project Information

**Project Name:** Student Task Manager

**Project Type:** Mini Web Development Project

**Technologies:** HTML, CSS, JavaScript

**Storage:** Browser Local Storage

**Platform:** Web Browser

---

## 📄 License

This project is created for **educational and academic purposes**.

---

## 🙏 Acknowledgement

This project was developed as a mini project to understand the fundamentals of front-end web development using HTML, CSS, JavaScript, and browser Local Storage.
