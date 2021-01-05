// Elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondtCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelectorAll("#g");
const clearButton=document.querySelectorAll("#clear-todos");

eventListeners();


function eventListeners(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodos);
    secondtCardBody.addEventListener("click",deleteTodo);
}
function deleteTodo(e){
   if(e.target.className==="fa fa-remove"){
       e.target.parentElement.parentElement.remove();
       deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
       showAlert("success","ToDo başarıyla silindi");
   }
}
function deleteTodoFromStorage(deletetodo){
    let todos=getToDosfromStorage();
    todos.forEach(function(todo,index){
        if(todo === deletetodo){
            todos.splice(index,1);//Arrayden değer silme 
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));

}
function loadAllTodos(){

    let todos=getToDosfromStorage();
    todos.forEach(function (todo){
        addToDoUI(todo);
    });

}


function addTodo(e){
        const newTodo=todoInput.value.trim();
        if(newTodo ===""){
            showAlert("danger","Lütfen bir to-do giriniz...");
        }
        else{
            addToDoUI(newTodo);
            addToDotoStroage(newTodo);
            showAlert("success","ToDo başarıyla eklendi");
        }
        //Basındaki ve sonundaki boslukları trim() ile yoksayabiliyoruz
       


    e.preventDefault();
}
function getToDosfromStorage(){//Storageden todo almak
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addToDotoStroage(newTodo){
  let todos=getToDosfromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos",JSON.stringify(todos));


}
// Bİlgilendirme mesajları Bootsrap 4 
function showAlert(type,message){
    const alert=document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent=message;
    firstCardBody.appendChild(alert);
    //Set Timeout 
    setTimeout(function(){
        alert.remove();
    },2000);// SÜreyi buradan milisaniye cinsinden ayarlayabiliriz.
    

}
function addToDoUI(newTodo){
  //List İtem oluşturma
   const listItem=document.createElement("li");
   const link=document.createElement("a");
  // Lİnk olusturma
   link.href="#";
   link.className="delete-item";
   link.innerHTML="<i class='fa fa-remove'></i>";

   listItem.className="list-group-item d-flex justify-content-between";

   //Text Node ile ekleme 
   listItem.append(document.createTextNode(newTodo));
   listItem.appendChild(link);

   todoList.appendChild(listItem);
   todoInput.value="";//Yazdıktan sonra silinmesi için


}