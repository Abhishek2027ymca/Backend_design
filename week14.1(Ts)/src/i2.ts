// OBJECT TYPING


// jsut a random object which has some properties
let userrrr = {
    name : "Abhishek",
    age : 21 ,
    address:{
        city : "Delhi",
        state : "Delhi"
    }
}

//SOLUTION
// i will specify the type of user object using type annotation
function printuser (user: { name: string; age: number; address: { city: string; state: string } }) {
    console.log("Name: " + user.name + ", Age: " + user.age);   
} 
function printinfo (user: { name: string; age: number; address: { city: string; state: string } }) {
    console.log("Name: " + user.name + ", Age: " + user.age);   
} 

printuser(userrrr)
printinfo(userrrr)


// CLEARLYB THE MAIN PROBLEM IS I NEED THE SPECITY THE  PROPERTY KE TYPES FOR EACH  OBJECT INT HE FUNCTION 

