
const list = document.getElementById("list");
const button = document.getElementById("add_task");


let index=1;

button.addEventListener("click",()=>{
    let element = document.createElement('li');
    element.textContent = "Task "+index++;
    list.appendChild(element)
})