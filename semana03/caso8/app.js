const taskForm = document.querySelector("#task-form");
const taskInput=document.querySelector("#task-input");
const taskList=document.querySelector("#task-list");

console.log("taskForm:", taskForm);
console.log("taskInput:", taskInput);
console.log("taskList:", taskList);

taskForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    const task = taskInput.value;
    console.log(task);
    console.log("SE EJECCUTO")
    console.log("tarea: " ,task);
    // const li= document.createElement("li");
    // li.textContent = task;
    // taskList.appendChild(li);


    //     const li = document.createElement("li");
// li.innerHTML =`${task}
// <span class="delete-btn">❌</span> 
// <span class class="edit-btn">🛠️</span>`;
// taskList.appendChild(li);

// const li = document.createElement("li");
// li.textContent = task;
// const span= document.createElement("span");
// span.textContent="❌";
// span.classList.add("delete-btn");
// li.appendChild(span);

// const span2 = document.createElement("span");
// span2.textContent="🛠️";
// span2.classList.add("edit-btn");
// li.appendChild(span2);
// taskList.appendChild(li)


const li = document.createElement("li");
li.textContent = task;
li.append( agregarBotonesSpan("❌", "delete-btn"),
agregarBotonesSpan("🛠️", "edit-btn"));
// createData(task);
// taskInput.value="";
taskList.appendChild(li);
})
function agregarBotonesSpan(texto, nombreClase){
    const btn = document.createElement("span");
    btn.textContent=texto;
    btn.classList.add(nombreClase);
    return btn;
}
taskList.addEventListener("click",(event)=>{
    if(event.target.closest(".delete-btn")){
        if(confirm("¿Estás seguro de borrar este elemento?")){
            event.target.closest(".delete-btn").parentElement.remove();
        }
    }else if(event.target.closest(".edit-btn")){
        const txtEdit = prompt("Editar");
        alert("Ingresó a editar");
        console.log(event.target.closest(".edit-btn").parentElement.firstChild.textContent);
        event.target.closest(".edit-btn").parentElement.firstChild.textContent= txtEdit
    }
})

document.querySelector("#toggle-theme-btn").addEventListener('click',(event)=>{
    document.body.classList.toggle("dark-theme");
})

