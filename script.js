

document.getElementById("add-btn").addEventListener("click",addTask);
function addTask(){
   const input=document.getElementById("todo-input");
   const taskText=input.value.trim();

   if(taskText===""){
    alert("ENTER A TASK, CHAMP!");
    return;
   }
  const li=document.createElement("li");
  li.textContent=taskText;
  const list=document.getElementById("todo-list");
  list.appendChild(li);
  input.value="";

}