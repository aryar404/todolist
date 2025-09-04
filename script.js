

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
  list.appendChild(li);
  const deleteBtn=document.createElement("button");
  deleteBtn.textContent="Delete";
  deleteBtn.style.marginLeft="10px";
  li.appendChild(deleteBtn);
  deleteBtn.addEventListener("click",function(){
    list.removeChild(li)
  })
  
  li.addEventListener("click",function(){
    console.log("clicked");
   span.classList.toggle("completed");
  });

  input.value="";

}