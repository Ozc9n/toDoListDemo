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
}

function addTodo(e){
        const newTodo=todoInput.value.trim();
        if(newTodo ===""){
            showAlert("danger","Lütfen bir to-do giriniz...");
        }
        else{
            addToDoUI(newTodo);
            showAlert("success","ToDo başarıyla eklendi");
        }
        //Basındaki ve sonundaki boslukları trim() ile yoksayabiliyoruz
       


    e.preventDefault();
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
  /*   <!-- <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

 </li>--> */
  //List İtem oluşturma
   const listItem=document.createElement("li");
   const link=document.createElement("a");
  // Lİnk olusturma
   link.href="#";
   link.className="delete-item";
   link.innerHTML="<i class = 'fa fa-remove'></i>";

   listItem.className="list-group-item d-flex justify-content-between";

   //Text Node ile ekleme 
   listItem.append(document.createTextNode(newTodo));
   listItem.appendChild(link);

   todoList.appendChild(listItem);
   todoInput.value="";//Yazdıktan sonra silinmesi için


}