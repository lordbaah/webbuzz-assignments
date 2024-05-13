const addTodo = document.querySelector('.to-do__add_btn');
const todoInput = document.querySelector('.to-do__input');
const todoList = document.querySelector('.to-do__list');
const clearAllTodo = document.querySelector('.to-do__empty_btn');
const clearComplete = document.querySelector('.to-do__completed_clear_btn');
const saveTodo = document.querySelector('.to-do__save_btn');


// creating a function to add task
const addTask = ()=>{
    let taskList = todoInput.value;
    if (taskList === '') {
        alert('enter a task')
    } else {
        let li = document.createElement('li');
        let span = document.createElement('span');
        span.textContent = taskList;
        li.appendChild(span);
        todoList.appendChild(li);

        // double click event to mark completed
        li.addEventListener("dblclick", ()=>{
            li.classList.toggle('active');
            span.classList.toggle('completed');
        });
        
        //  adding a click event to clear all completed task
        clearComplete.addEventListener("click", ()=>{
            if (li.classList.contains('active') || span.classList.contains('completed')) {
                li.style.display = 'none';
            }
        })
    }

    // Clear input field after adding task
    todoInput.value = '';
}

//  eventlistener to add task
addTodo.addEventListener("click", addTask);

// function to clear task
const clearAllTasks = () => {
    todoList.innerHTML = ''; // Clear all tasks from UI
};

clearAllTodo.addEventListener("click", clearAllTasks)