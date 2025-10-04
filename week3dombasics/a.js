 


 function addTodo() {
    const inputEl = document.getElementById("inp");
    const textNode = document.createElement("div");
    textNode.innerHTML = inputEl.value;
    const parentEl = document.getElementById("todos");
    parentEl.appendChild(textNode);

  }

  // to add an elmenty in the dom we use appendchild
  // we also has to acces the paeren t
  