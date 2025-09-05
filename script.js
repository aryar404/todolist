

document.getElementById("add-btn").addEventListener("click",addTask);
function addTask(){
   const input=document.getElementById("todo-input");
   const taskText=input.value.trim();

   if(taskText===""){
    alert("ENTER A TASK, CHAMP!");
    return;
   }
  const li=document.createElement("li");
  const span=document.createElement("span");
  span.textContent=taskText;
  li.appendChild(span);

  const list=document.getElementById("todo-list");
  // Remove "NO TASKS, YET!" message if present
  const emptyMsg = document.getElementById("empty-msg");
  if (emptyMsg) {
    list.removeChild(emptyMsg);
  }
  list.appendChild(li);

  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.style.marginLeft="10px";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",function(){
    list.removeChild(li);
    // If no tasks left, show "NO TASKS, YET!" message
    if (list.children.length === 0) {
      const noTasksLi = document.createElement("li");
      noTasksLi.textContent = "NO TASKS, YET!";
      noTasksLi.id = "empty-msg";
      noTasksLi.style.fontStyle = "italic";
      list.appendChild(noTasksLi);
    }
  });
  
  li.addEventListener("click",function(){
    console.log("clicked");
   span.classList.toggle("completed");
  });

  input.value="";

}

// Show "NO TASKS, YET!" if list is empty on load
window.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("todo-list");
  if (list.children.length === 0) {
    const noTasksLi = document.createElement("li");
    noTasksLi.textContent = "NO TASKS, YET!";
    noTasksLi.id = "empty-msg";
    noTasksLi.style.fontStyle = "italic";
    list.appendChild(noTasksLi);
  }
});