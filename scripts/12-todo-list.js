const todoList = [{
  name: 'make dinner', 
  dueDate: '2025-3-28'
}, {
  name: 'wash dishes',
  dueDate: '2025-3-28'
}];
  

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach(function(todoObject, index){
    const {name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button> 
      `;
  })

  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

  function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    
    const dataInputElement = document.querySelector ('.js-due-date-input')
    const dueDate = dataInputElement.value;

    todoList.push({
      name,
      dueDate
    });
   

    inputElement.value ='';

    renderTodoList();
  }
