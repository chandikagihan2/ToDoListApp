
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

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    checkbox.addEventListener('change', function () {
        taskTextSpan.classList.toggle('completed');
    });

    li.appendChild(checkbox);
    li.appendChild(taskTextSpan);
    

const editButton = document.createElement('button');

editButton.textContent = 'Edit';

editButton.addEventListener('click', function (event) {
    event.stopPropagation();

    const newTask = prompt('Edit your task:', taskTextSpan.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskTextSpan.textContent = newTask;
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
