
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function () {

    const taskText = taskInput.value;

    if (taskText.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', function () {
        li.classList.toggle('completed');
    });

    const editButton = document.createElement('button');

    editButton.textContent = 'Edit';

    editButton.addEventListener('click', function (event) {
        event.stopPropagation();

        const newTask = prompt('Edit your task:', taskText);

        if (newTask !== null && newTask.trim() !== '') {
            li.firstChild.textContent = newTask;
        }
    });

    li.appendChild(editButton);

    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = '';

});
