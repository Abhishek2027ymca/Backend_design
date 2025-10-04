// for deletion 
let ctr = 1;

function deleteTodo( index) {

     const element = document.getElementById(index)
     element.parentNode.removeChild(element);
}

function addtodo() {
    const inputElement = document.querySelector("input");
    const val = inputElement.value;// value i put in the box 

    const newdiv = document.createElement('div')
    // when ever i am calling a div it will gv that div and id  
    newdiv.setAttribute("id",ctr);

//!!!!!!important to use backticks here not single quotes or double quotes////////
    newdiv.innerHTML = "<div>" + val + "</div><button on click='deleteTodo(' + ctr +')'>Delete</button>";
    document.querySelector("body").appendChild(newdiv)

        ctr = ctr+1 ;


}














