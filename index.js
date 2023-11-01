// Select form
let btn = document.getElementById('create-task-form');

// Add event listener to Submit action in form
btn.addEventListener('submit', handleNewTask);

// Define function that will run when Submit button is clicked
function handleNewTask(event) {
    // prevent default action of form (reset)
    event.preventDefault();
    const form = event.target;
    const newTask = form["new-task-description"]["value"]
    if (newTask === '') {
        alert('Add something!');
    }
    else {
        const newLi = document.createElement('li');
        newLi.textContent = newTask;
        const taskList = document.getElementById('tasks');
        taskList.appendChild(newLi);
        form.reset();
    }
}