document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = taskText;
            taskList.appendChild(newTask);
            taskInput.value = '';

            // Add event listener to mark task as completed
            newTask.addEventListener('click', function() {
                newTask.classList.toggle('completed');
            });

            // Add delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            newTask.appendChild(deleteBtn);

            // Add event listener to delete task
            deleteBtn.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent task from being marked as completed when deleting
                taskList.removeChild(newTask);
            });
        }
    });
});
