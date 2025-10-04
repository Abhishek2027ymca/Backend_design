
// function addTodo(){
//     const inputElement = document.querySelector('input');
//      const value = inputElement.value;
//      // loggin the cirrent vaslue of input in consloe 
//     console.log(value);
// }
let ctr = 0
function callback() {
    //// second elm ko change karte rho 
    // document.querySelectorAll("h4")[0].innerHTML = ctr;

    // console.log(ctr);

    // ctr++;

}
// callback the  callback function in everu 1se c 

setInterval(callback, 1000);



  function deleteTodo(index) {
    
    const element = document.getElementById("todo-" + index);
    // to delete  , fir st  go to parent node  and then  do to child node 
    element.parentNode.removeChild(element);
  }