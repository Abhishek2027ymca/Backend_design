

function addtodo(){
  const   value = document.querySelector(input).value;

  const spanel = document.createElement("span")
  const buttonel = document.createElement("button")

  spanel.innerHTML = value;
  buttonel.innerHTML = "delete";


  const divel = document.createElement("div")
  divel.appendChild(spanel)
  divel.appendChild(buttonel)


  // puttin  the new div created into the body
  document.querySelector("body").appendChild(divel) 



}