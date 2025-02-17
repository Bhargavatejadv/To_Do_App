#To-Do App
A simple, yet powerful To-Do List app built using HTML, CSS, and JavaScript. The app allows users to add, remove, and mark tasks as completed. Additionally, it saves the data locally, ensuring that tasks persist even if the page is reloaded or the browser is closed.

Features
*Add tasks to your to-do list.
*Mark tasks as completed.
*Remove tasks from the list.
*Data is saved using localStorage, so your tasks will be retained even after page reloads or closing and reopening the browser.
Technologies Used
HTML: Used for the structure of the app.
CSS: Used for styling the app and making it visually appealing.
JavaScript: Used for the functionality of adding, removing, and saving tasks to localStorage.
How to Use
Clone this repository to your local machine or download the files.
Open the index.html file in your web browser.
Use the input box to add new tasks to your list.
Click the task to mark it as completed (you can also remove it by clicking the trash icon).
Close and reopen the browser or reload the page to see that your tasks are still there!
How it works
The tasks are stored in the browser's localStorage. This allows the data to persist even after the user refreshes the page or closes and reopens the browser.
When a task is added, it gets saved to localStorage.
When a task is marked as completed or deleted, the changes are reflected in the localStorage, ensuring they remain even after a reload.
LocalStorage Usage
Adding tasks: When you add a task, it is saved in the browser's localStorage.
Task completion: The app keeps track of whether a task is marked as completed in localStorage.
Deleting tasks: When a task is deleted, it is removed from both the list and localStorage.
