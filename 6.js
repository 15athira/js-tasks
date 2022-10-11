const todoItems = document.querySelector("#todo-items");
const addButton = document.querySelector("#add-button");
const todoList = document.querySelector("#todo-list");
const clearButton = document.querySelector("#clear-all");

let todoItem = [];

addButton.addEventListener("click",addTodo);
clearButton.addEventListener("click",clearAll)

function addTodo(){
    if(todoItems.value==""){
        alert("Please Add!");
    }
    else{
        todoItem.push(todoItems.value);
        todoItems.value = "";
        renderTodo();
    }
    
}

function removeTodo(index){
    todoItem.splice(index,1);
    renderTodo();
}

function renderTodo(){
    todoList.innerHTML="";
    for(let i=0;i<todoItem.length;i++){
        todoList.innerHTML += `<div id="list"><span>${todoItem[i]}</span><button onclick="removeTodo()" id="item">x</button></div>`;
    } 
}

function clearAll(){
    if(confirm("Are you sure?")){
        todoItem=[];
        removeTodo();
    }  
}