let ctr = 1; // counter for unique ids

function addtodo() {
    // 1. Get input element
    const inputEl = document.querySelector("input");

    // 2. Get the value typed inside it
    const val = inputEl.value;

    // 3. Create a new div for the todo
    const tododiv = document.createElement("div");

    // 4. Give unique id using ctr
    tododiv.setAttribute("id", ctr);

    // 5. Insert todo text and delete button
    tododiv.innerHTML = `
    <span id="text-${ctr}">${val}</span>
    <button onclick="modifyTodo(${ctr})">Modify</button>
    <button onclick="deleteTodo(${ctr})">Delete</button>
`;
    // 6. Append new div to the body
    document.querySelector("body").appendChild(tododiv);

    // 7. Increase counter
    ctr++;

    // 8. Clear input
    inputEl.value = "";
}

function deleteTodo(index) {
    const elm = document.getElementById(index);
    if (elm) {
        elm.parentNode.removeChild(elm);
    }
}


function modify(ind){
    // finding the span dor this  todo 
    const ellm = document.getElementById(index)

       const newVal = prompt("Enter new todo:", textElement.innerText);

    // if user typed something, update it
    if (newVal !== null && newVal.trim() !== "") {
        textElement.innerText = newVal;

}}