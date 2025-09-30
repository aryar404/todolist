

document.getElementById("add-btn").addEventListener("click",addTask);
document.getElementById("todo-input").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
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
  const completedCounter = document.getElementById("completed-counter");
  const uncompletedCounter = document.getElementById("uncompleted-counter");
  function updateCounters() {
     const list = document.getElementById("todo-list");
  // Only count <li> elements that are not the empty message
  const taskItems = Array.from(list.children).filter(
    li => li.id !== "empty-msg"
  );
  const completedTasks = taskItems.filter(
    li => li.querySelector(".completed")
  ).length;
  const uncompletedTasks = taskItems.length - completedTasks;

  document.getElementById("completed-counter").textContent = completedTasks;
  document.getElementById("uncompleted-counter").textContent = uncompletedTasks;
  } 
  // Remove "NO TASKS, YET!" message if present
  const emptyMsg = document.getElementById("empty-msg");
  if (emptyMsg) {
    list.removeChild(emptyMsg);
  }
  list.appendChild(li);
 updateCounters();
  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.style.marginLeft="10px";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",function(){
    if(confirm("Are you sure you want to delete this task?")){
      list.removeChild(li);
      updateCounters();
    }
      
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
   updateCounters();
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