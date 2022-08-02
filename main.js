//assign elements
const btn = document.getElementById('new-task-submit'); 



//listen for click event, and call the function AddTodo
btn.addEventListener ('click', AddTodo);

//add todos
function AddTodo(){
    let userInput = document.getElementById('new-task').value; 
    
let todoList = document.querySelector('ul');
    if(userInput !=''){
        let todo = document.createElement('li');
        todo.innerHTML = `${userInput} <div id="delete">Delete</button>`;
        todoList.appendChild(todo);
    
         document.getElementById('new-task').value =''; 
         document.getElementById('new-task').focus(); 
    
}else{
alert('please provide a todo task');

}
}
//remove todos
const ClickTodoList = document.getElementById('todo-list');
//listen for click event and call function RemoveTodo
ClickTodoList.addEventListener('click', RemoveTodo);
function RemoveTodo(e){
    let removeLi = e.target.parentNode;
    let todoList = document.getElementById('todo-list');
    todoList.removeChild(removeLi);
  
}



         



